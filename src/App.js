import "./App.css";
import Autosuggestion from "./components/Autosuggestion/Autosuggestion";
import DynamicForm from "./components/DynamicForm/DynamicForm";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import GridLights from "./components/GridLights/GridLights";
import Timer from "./components/Timer/Timer";
import Toast from "./components/Toast/Toast";
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
      <DynamicForm/>
      <FileExplorer/>
      <Autosuggestion/>
      <Toast/>
    </div>
  );
}

export default App;
