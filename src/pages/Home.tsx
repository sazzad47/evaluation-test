import Layout from "../components/layout";
import Heading from "../components/ui/Heading";
import SearchBar from "../components/home/SearchBar";
import AddTodos from "../components/home/AddTodos";
import useLocalStorage from "../hooks/useLocalStorage";
import { Todo } from "../types";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTodos } from "../redux/reducer";
import TodoList from "../components/home/TodoList";

const Home: React.FC = () => {
  const [todos] = useLocalStorage<Todo[]>("todos");
  const dispatch = useDispatch();

  useEffect(() => {
    if (Array.isArray(todos)) {
      // Dispatch each todo to the store
      todos.forEach((todo) => {
        dispatch(addTodos(todo));
      });
    }
  }, [dispatch, todos]);

  return (
    <Layout>
      <div className="w-full flex flex-col gap-20">
        <Heading>
            Your Ultimate Todo Companion
        </Heading>
        <div className="flex w-full items-center">
        <SearchBar/>
        <AddTodos/>
        </div>
        <div>
          <TodoList/>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
