import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen pt-[6%] bg-pink-100">
      <div className="flex justify-center">
        <h2 className="text-4xl">Mini URL</h2>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[50%] ">
          <label
            htmlFor="url"
            className="block mb-2  font-medium text-gray-900 text-xl dark:text-white"
          >
            Enter your URL:
          </label>
          <input
            type="text"
            id="url"
            className="bg-gray-50 border border-gray-300  w-full p-2.5 rounded-md"
            placeholder="John"
            required
          />
          <button className="text-2xl p-3 mt-8 rounded-md  bg-gray-300">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
