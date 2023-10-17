import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../types";
import { setSearchTerm, setSelectedCategory } from "../../redux/reducer";

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedCategory, todos } = useSelector((state: RootState) => state.todos);
  const [searchFor, setSearchFor] = useState(""); 

  // Extract unique categories from the todo items
  const categories = Array.from(new Set(todos.map((todo) => todo.category)));

  // Add "All categories" as the first category option
  categories.unshift("All categories");

  // Handler to update the selected category
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedCategory(e.target.value));
  };

  const handleSearch = () => {
    dispatch(setSearchTerm(searchFor));
  };

  return (
    <div className="w-full sm:w-auto flex justify-center items-center">
      <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center p-3 sm:p-4 md:p-6 space-x-0 sm:space-x-4 md:space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
        <div className="w-full flex gap-2 bg-gray-100 p-4 rounded-lg">
          <AiOutlineSearch className="w-6 h-6 opacity-30 hidden sm:block" />
          <input
            className="max-w-full bg-gray-100 outline-none"
            type="text"
            placeholder="Search title..."
            value={searchFor} 
            onChange={(e) => setSearchFor(e.target.value)}
          />
        </div>
        <div className="w-full flex py-3 rounded-lg text-gray-500 font-semibold cursor-pointer">
          <select value={selectedCategory} onChange={handleCategoryChange} className="w-full bg-transparent border-none outline-none px-1 sm:px-2 md:px-3">
            {categories.map((category, index) => (
              <option key={index} value={category} className="border-none focus:outline-none">
                {category}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-indigo-900 w-full text-center sm:w-auto mt-5 sm:mt-0 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-300 cursor-pointer"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
