import { useSelector } from "react-redux";
import { RootState, Todo } from "../../types";
import { filterTodos } from "../../utils/filterTodos";
import { motion } from "framer-motion";
import {FaCopy} from "react-icons/fa";
import useClipboard from "../../hooks/useClipboard";

const TodoList = () => {
  const state = useSelector((state: RootState) => state.todos);
  const { todos, searchTerm, selectedCategory } = state;

  const filteredTodos = filterTodos(todos, searchTerm, selectedCategory);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {filteredTodos.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </div>
  );
}

const TodoItem = ({ item }: { item: Todo }) => {

  const { isCopied, copyToClipboard } = useClipboard();

  const initialAnimation = {
    x: "150vw", 
    transition: { type: "spring", duration: 2 }, 
  };

  const handleCopy = () => {
    const textToCopy = `${item.title}\n${item.description}\n${item.category}`;
    copyToClipboard(textToCopy);
  };

  return (
    <motion.div
      initial={initialAnimation}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
      }}
      key={item.id}
      className="w-full shadow-lg bg-white rounded-lg p-5 flex flex-col gap-3"
    >
      <div className="w-full flex justify-between items-center">
        <p className="text-gray-900 font-bold text-lg sm:text-xl">{item.title}</p>
       
        {
          isCopied? 
          <div className="text-indigo-600">Copied!</div>
          : 
          <FaCopy
            className="text-xl sm:text-2xl cursor-pointer text-indigo-900"
            onClick={handleCopy}
          /> 
        }
        
      </div>
      <p>{item.description}</p>
      <div className="w-full flex justify-start">
        <div className="block px-5 py-2 rounded-full bg-gray-100">{item.category}</div>
      </div>
    </motion.div>
  );
};

export default TodoList;
