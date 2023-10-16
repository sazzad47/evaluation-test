import { Todo } from "../types";

const TodoValidator = () => {
  const validateTodo = (todo: Todo) => {
    // Define validation rules
    const isTitleValid = todo.title.trim() !== "";
    const isDescriptionValid = todo.description.trim() !== "";
    const isCategoryValid = todo.category.trim() !== "";

    // Check if any of the validation rules fail
    if (!isTitleValid) {
      return { isValid: false, error: "Title cannot be empty" };
    }

    if (!isDescriptionValid) {
      return { isValid: false, error: "Description cannot be empty" };
    }

    if (!isCategoryValid) {
      return { isValid: false, error: "Category cannot be empty" };
    }

    // If all validations pass, return that the todo is valid
    return { isValid: true, error: "" };
  };

  return { validateTodo };
};

export default TodoValidator;
