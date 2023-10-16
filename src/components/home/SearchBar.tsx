import React, { useState } from "react";

const SearchBar: React.FC = () => {
  // Define an array of categories
  const categories: string[] = ["All categories", "Category 1", "Category 2", "Category 3"];

  // State to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  // Handler to update the selected category
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="flex justify-center items-center px-20">
      <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
        <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 opacity-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input className="bg-gray-100 outline-none" type="text" placeholder="Article name or keyword..." />
        </div>
        <div className="flex py-3 rounded-lg text-gray-500 font-semibold cursor-pointer">
          <select value={selectedCategory} onChange={handleCategoryChange} className="border-none outline-none px-3">
            {categories.map((category, index) => (
              <option key={index} value={category} className="border-none focus:outline-none">
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-indigo-900 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-300 cursor-pointer">
          <span>Search</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
