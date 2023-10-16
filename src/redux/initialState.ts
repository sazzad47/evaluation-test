import { Todo } from "../types";

export const initialState: {
    searchTerm: string;
    selectedCategory: string;
    todos: Todo[];
  } = {
    searchTerm: "",
    selectedCategory: "All categories",
    todos: [],
  };
  
  