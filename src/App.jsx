import Home_page from "./pages/Home_page";
import Meal_page from "./pages/Meal";
import Left from "./components/left";
import Workout_page from "./pages/Workout_page";
{/* <Home_page /> */}
function App() {
  return (
    <div>
      <Workout_page />
    </div>
    // <div className="min-h-screen bg-gray-200 flex">
    //   <Left />
    //   <div className="ml-56 flex-1 p-6">
    //     <Meal_page />
    //   </div>
    // </div>
  );
}

export default App;
