import Home_page from "./pages/Home_page";
import Meal_page from "./pages/Meal";
import Left from "./components/left";
function App() {
  return (
    <div className="flex">
      {/* <Home_page /> */}
      <Left />
      <Meal_page/>
    </div>
  );
}

export default App;
