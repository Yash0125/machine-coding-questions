import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Accordion from "./components/accordion/Accordion";
import Carousel from "./components/carousel/Carousel";
import DebounceExample from "./components/debounceExample/DebounceExample";
import StarRating from "./components/starRating/StarRating";

function App() {
  return (
    <div className="app">
      <TodoList />
      <Carousel/>
      <StarRating/>
      <Accordion/>
      <DebounceExample/>
    </div>
  );
}

export default App;
