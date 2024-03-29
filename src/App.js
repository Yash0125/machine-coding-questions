import "./App.css";
import GridLights from "./components/GridLights/GridLights";
import Timer from "./components/Timer/Timer";
import TodoList from "./components/TodoList/TodoList";
import Accordion from "./components/accordion/Accordion";
import ApiSort from "./components/apiSort/ApiSort";
import Carousel from "./components/carousel/Carousel";
import Cart from "./components/cart/Cart";
import DebounceExample from "./components/debounceExample/DebounceExample";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
import Search from "./components/search/Search";
import StarRating from "./components/starRating/StarRating";

function App() {
  return (
    <div className="app">
      <TodoList />
      <Carousel/>
      <StarRating/>
      <Accordion/>
      <DebounceExample/>
      <Cart/>
      <Timer/>
      <ApiSort/>
      <Search/>
      <LightDarkMode/>
      <GridLights/>
    </div>
  );
}

export default App;
