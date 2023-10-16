import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../ui/Modal";
import { Todo } from "../../types";
import InputField from "../ui/InputField";
import TextAreaField from "../ui/TextAreaField";
import SelectField from "../ui/SelectField";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useDispatch } from "react-redux";
import { addTodos } from "../../redux/reducer";
import TodoValidator from "../../validations/todoValidator";

const AddTodos = () => {
  // Initial todo item
  const initialTodo: Todo = {
    id: Math.floor(Math.random() * 1000),
    title: "",
    description: "",
    category: "",
    completed: false,
  };

  // Initialize TodoValidator
  const { validateTodo } = TodoValidator();
  const dispatch = useDispatch();

  // Manage todo items as an array in local storage
  const [, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [todo, setTodo] = useState<Todo>(initialTodo);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setTodo(initialTodo);
    setModalOpen(false);
  };

  const handleAddTodo = () => {
    
    // Validate the todo
    const { isValid, error } = validateTodo(todo);

    if (!isValid) {
      alert(error); // Display the error to the user
      return;
    }

    // Add the current todo to the array of todos
    setTodos((prevTodos) => [...prevTodos, todo]);
    dispatch(addTodos(todo));

    // Reset the todo to the initial state
    setTodo(initialTodo);

    closeModal();
  };

  // Define an array of categories
  const categories: string[] = ["Work", "Personal", "Study", "Home", "Others"];

  return (
    <div className="w-full flex justify-center sm:justify-end">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-indigo-900 text-white rounded-full border-2 border-indigo-900 text-2xl w-16 h-16 cursor-pointer shadow-md flex justify-center items-center"
        onClick={openModal}
      >
        <GoPlus />
      </motion.button>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal
            handleClose={closeModal}
            className="m-auto w-[90%] sm:w-[70%] md:w-[50%] h-[70%] md:h-[60%] bg-white"
          >
            <div className="w-full h-full flex flex-col p-[1rem] sm:p-[2rem] md:p-[3rem] justify-between">
              <ModalContent todo={todo} setTodo={setTodo} categories={categories} />
              <div className="w-full flex justify-end gap-4">
                <button
                  onClick={closeModal}
                  className="rounded-md text-[#333] font-[roboto] text-[1.25rem] bg-[#E9E9E9] py-3 px-10"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddTodo}
                  className="rounded-md text-[#FFF] font-[roboto] text-[1.25rem] bg-indigo-900 py-3 px-10"
                >
                  Add
                </button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

interface ModalContentProps {
  todo: Todo;
  setTodo: React.Dispatch<React.SetStateAction<Todo>>;
  categories: string[];
}

const ModalContent = ({ todo, setTodo, categories }: ModalContentProps) => {
  const handleChange = (value: string, key: string) => {
    setTodo({ ...todo, [key]: value });
  };

  return (
    <div>
      <InputField
        label="Title"
        value={todo.title}
        onChange={(value) => handleChange(value, "title")}
        id="title"
        type="text"
      />
      <TextAreaField
        label="Description"
        value={todo.description}
        onChange={(value) => handleChange(value, "description")}
        id="description"
        rows={3}
      />
      <SelectField
        label="Category"
        value={todo.category}
        onChange={(value) => handleChange(value, "category")}
        id="category"
        options={categories}
      />
    </div>
  );
};

export default AddTodos;
