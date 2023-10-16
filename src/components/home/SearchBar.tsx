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
    <div className="flex justify-center items-center px-20">
      <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
        <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
          <AiOutlineSearch className="w-6 h-6 opacity-30" />
          <input
            className="bg-gray-100 outline-none"
            type="text"
            placeholder="Article name or keyword..."
            value={searchFor} 
            onChange={(e) => setSearchFor(e.target.value)}
          />
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
        <div
          className="bg-indigo-900 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-300 cursor-pointer"
          onClick={handleSearch}
        >
          <span>Search</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
