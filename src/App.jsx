import { Routes, Route, Link } from "react-router-dom";
import Home_page from "./pages/Home_page";
import Meal_page from "./pages/Meal";
import Workout_page from "./pages/Workout_page";
import Study_page from "./pages/study_page";
import Login_page from "./pages/Login_page";
function App() {
  return (
    <>
    {/* <Login_page /> */}
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/meal" element={<Meal_page />} />
        <Route path="/workout" element={<Workout_page />} />
        <Route path="/study" element={<Study_page/>} />
      </Routes>
    </>
  );
}

export default App;
