import Home_page from "./pages/Home_page";
import Meal_page from "./pages/Meal";
import Workout_page from "./pages/Workout_page";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/DashBoard" element={<Home_page/>}></Route>
      <Route path="/Meal" element={<Meal_page/>}></Route>
    </Routes>
  );
}

export default App;

