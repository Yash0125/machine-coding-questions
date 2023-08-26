import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    <div className="app">
      <TodoList />
      <Carousel/>
    </div>
  );
}

export default App;
