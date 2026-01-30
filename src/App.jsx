import { Routes, Route, Link } from "react-router-dom";
import Left from "./components/Left";
import Home_page from "./pages/Home_page";
import Meal_page from "./pages/Meal";
import Workout_page from "./pages/Workout_page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/meal" element={<Meal_page />} />
        <Route path="/workout" element={<Workout_page />} />
      </Routes>

    </>
  );
}

export default App;
