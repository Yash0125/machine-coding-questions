import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Carousel from "./components/carousel/Carousel";
import StarRating from "./components/starRating/StarRating";

function App() {
  return (
    <div className="app">
      <TodoList />
      <Carousel/>
      <StarRating/>
    </div>
  );
}

export default App;
