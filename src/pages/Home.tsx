import Layout from "../components/layout";
import Heading from "../components/ui/Heading";
import SearchBar from "../components/home/SearchBar";
import AddTodos from "../components/home/AddTodos";
import TodoList from "../components/home/TodoList";

const Home: React.FC = () => {

  return (
    <Layout>
      <div className="w-full flex flex-col gap-20">
        <Heading>
            Your Ultimate Todo Companion
        </Heading>
        <div className="flex w-full flex-col gap-10 items-center">
        <SearchBar/>
        <AddTodos/>
        <TodoList/>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
