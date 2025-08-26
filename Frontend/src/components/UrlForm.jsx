import axios from "axios";
import { useState } from "react";

const UrlForm = () => {
  const [url, setValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:3000/api/create", { url });
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Enter your URL
        </label>
        <input
          type="url"
          id="url"
          onInput={(e) => {
            setValue(e.target.value);
          }}
          value={url}
          placeholder="https://example.com"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
      >
        Shorten URL
      </button>
      <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">Error</div>
      <div className="mt-4">
        <label
          htmlFor="customSlug"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Custom URL (optional)
        </label>
        <input
          type="text"
          id="customSlug"
          placeholder="Enter custom slug"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Your shortened URL:</h2>
        <div className="flex items-center">
          <input
            type="text"
            readOnly
            className="flex-1 p-2 border border-gray-300 rounded-l-md bg-gray-50"
          />
          <button
            className={`px-4 py-2 rounded-r-md transition-colors duration-200`}
          >
            Copy
          </button>
        </div>
      </div>
    </form>
  );
};

export default UrlForm;
