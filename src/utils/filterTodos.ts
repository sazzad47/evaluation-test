import { Todo } from "../types";

export const filterTodos = (todos: Todo[], searchTerm: string, selectedCategory: string) => {
  return todos.filter((todo) => {
    const categoryMatch =
      selectedCategory === "All categories" || todo.category === selectedCategory;
    const titleMatch = todo.title.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && titleMatch;
  });
};
