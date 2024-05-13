"use client";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast'

export default function Home() {
  const [formData, setFormData] = useState("");

  const submitForm = async (e: any) => {
    e.preventDefault(); 

    try {
      const response = await axios.post(
        "http://localhost:3000/api/url",
        { url: formData } // Pass formData as an object with a 'url' key
      );
      toast.success("url generated successfully")
      console.log("Response:", response.data);
     
    } catch (error) {
      toast.error("error while sending url")
      console.error("Error:", error)
    }
  };

  return (
    <div className="h-screen pt-[6%] bg-pink-100">
      <div className="flex justify-center">
        <h2 className="text-4xl">Mini URL</h2>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[50%] ">
          <form onSubmit={submitForm}>
            <label
              htmlFor="url"
              className="block mb-2  font-medium text-gray-900 text-xl dark:text-white"
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
              className="bg-gray-50 border border-gray-300  w-full p-2.5 rounded-md"
              placeholder="Enter URL"
              required
            />
            <button
              className="text-2xl p-3 mt-8 rounded-md  bg-gray-300"
              type="submit"
            >
              Generate
            </button>
          </form>
          <Toaster
                position="top-center"
                reverseOrder={true}
            />
        </div>
      </div>
    </div>
  );
}
