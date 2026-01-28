import Home_page from "./pages/Home_page";
import Meal_page from "./pages/Meal";
import Left from "./components/left";
{/* <Home_page /> */}
function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex">
      <Left />
      <div className="ml-56 flex-1 p-6">
        <Meal_page />
      </div>
    </div>
  );
}

export default App;
