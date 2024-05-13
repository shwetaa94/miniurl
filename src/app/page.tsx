"use client";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { TbTransformFilled } from "react-icons/tb";
import { DiVim } from "react-icons/di";
import { FaCopy } from "react-icons/fa";

export default function Home() {
  const [formData, setFormData] = useState("");
  const [miniurl, setminiurl] = useState("");
  const submitForm = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/url",
        { url: formData } // Pass formData as an object with a 'url' key
      );
      if (response.data) {
        const shortID = response.data.data.shortId;
        setminiurl(`http://localhost:3000/api/url?id=${shortID}`);
      }
      toast.success("url generated successfully");
      console.log("Response:", response.data);
    } catch (error) {
      toast.error("error while sending url");
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-screen pt-[6%] bg-[#DEEFF5]">
      <div className="flex justify-center">
        <span>
          <TbTransformFilled className="text-4xl ml-[-4rem]" />
        </span>
        <h2 className="text-4xl font-serif mb-8">Mini URL</h2>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[50%] ">
          <form onSubmit={submitForm}>
            <label
              htmlFor="url"
              className="block mb-2  font-medium text-gray-900 text-xl dark:text-white font-sans italic"
            >
              Enter your URL:
            </label>
            <input
              type="text"
              id="url"
              value={formData} // Use value attribute to bind input value
              onChange={(e) => {
                setFormData(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300  w-full p-2.5 rounded-md "
              placeholder="Enter URL"
              required
            />
            {miniurl ? (
              <div className="mt-10">
                <div className="block mb-2  font-medium text-gray-900 text-xl dark:text-white font-sans italic">
                  Mini URL:
                </div>
                <div className="flex">
                  <div
                    className="bg-gray-50 border border-gray-300  w-full p-2.5 rounded-md  "
                    id="url"
                  >
                    {miniurl}
                  </div>
                  <div
                    className="text-3xl ml-4 mt-3"
                    onClick={() => {
                      navigator.clipboard.writeText(miniurl);
                      toast.success("URL copied successfully! 😎🤗");
                    }}
                  >
                    <FaCopy />
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <button
              className="text-xl p-3 mt-8 rounded-md  bg-gray-300 font-semibold"
              type="submit"
            >
              Generate
            </button>
          </form>
          <Toaster position="top-center" reverseOrder={true} />
        </div>
      </div>
    </div>
  );
}
