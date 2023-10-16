import { useSelector } from "react-redux";
import { RootState } from "../../types";
import { filterTodos } from "../../utils/filterTodos";

const TodoList = () => {
  const state = useSelector((state: RootState) => state.todos);
  const { todos, searchTerm, selectedCategory } = state;

  const filteredTodos = filterTodos(todos, searchTerm, selectedCategory);

  return (
    <div>
      {filteredTodos.map((item, index) => (
        <h4 key={index}>{item.title}</h4>
      ))}
    </div>
  );
}

export default TodoList;
