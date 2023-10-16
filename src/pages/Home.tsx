import Layout from "../components/layout";
import Heading from "../components/ui/Heading";
import SearchBar from "../components/home/SearchBar";
import AddTodos from "../components/home/AddTodos";
import useLocalStorage from "../hooks/useLocalStorage";
import { RootState, Todo } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTodos } from "../redux/reducer";

const Home: React.FC = () => {
  const [todos] = useLocalStorage<Todo[]>("todos");
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    if (Array.isArray(todos)) {
      // Dispatch each todo to the store
      todos.forEach((todo) => {
        dispatch(addTodos(todo));
      });
    }
  }, [dispatch, todos]);

  console.log('todoList', todoList)

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
      </div>
    </Layout>
  );
}

export default Home;
