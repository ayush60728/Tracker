import { Routes, Route } from "react-router-dom";
import Home_page from "./pages/Home_page";
import Meal_page from "./pages/Meal";
import Login_page from "./pages/Login_page";
import Chatwindow from "./components/Chatwindow";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login_page />} />    
        <Route path="/homepage" element={<Home_page />} />
        <Route path="/meal" element={<Meal_page />} />
        <Route path="/chat" element={<Chatwindow />} />  
        {/* <Route path="/workout" element={<Workout_page />} />
        <Route path="/study" element={<Study_page />} /> */}
      </Routes>
    </>
  );
}

export default App;