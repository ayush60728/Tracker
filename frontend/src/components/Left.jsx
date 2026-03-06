import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Left = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post(
        "https://mf-backend-0cqj.onrender.com/user/logout",
        {},
        { withCredentials: true }
      );
      navigate("/");
    } catch (err) {
      console.log("Logout error:", err);
    }
  };

  return (
    <div
      className="
        fixed mt-20 ml-5
        h-[80vh] w-16 md:w-56
        bg-[#0a1a3f]/50
        text-white rounded-3xl
        px-2 md:px-6 py-8
        flex flex-col
        shadow-xl border-2 border-white/60
      "
    >
      {/* Logo */}
      <div className="mx-auto md:ml-11 w-8 h-8 md:w-15 md:h-15">
        <img src="/logopart-2 (1).png" alt="" />
      </div>

      {/* Title — hidden on mobile */}
      <div className="hidden md:block text-2xl font-semibold mb-10 tracking-wide p-2 underline">
        Daily Tracker
      </div>

      {/* Dashboard */}
      <Link
        to="/homepage"
        className="
          flex items-center justify-center md:justify-start
          px-2 md:px-4 py-3 rounded-2xl
          transition-all duration-300 ease-in-out
          hover:bg-white/10 hover:scale-105
          text-sm md:text-base mt-4 md:mt-0
        "
      >
        <span className="md:hidden text-xs text-center leading-tight">🏠</span>
        <span className="hidden md:block">Dashboard</span>
      </Link>

      {/* Meal */}
      <Link
        to="/meal"
        className="
          flex items-center justify-center md:justify-start
          px-2 md:px-4 py-3 rounded-2xl mt-3
          transition-all duration-300 ease-in-out
          hover:bg-white/10 hover:scale-105
          text-sm md:text-base
        "
      >
        <span className="md:hidden text-xs text-center leading-tight">🍽️</span>
        <span className="hidden md:block">Meal</span>
      </Link>

      {/* Logout */}
      <div
        onClick={logout}
        className="
          mt-auto flex items-center justify-center md:justify-start
          px-2 md:px-4 py-3 rounded-2xl
          cursor-pointer text-red-400
          bg-white/10 border border-white/10
          hover:bg-red-500/20
          transition-all duration-300
          text-sm md:text-base
        "
      >
        <span className="md:hidden">🚪</span>
        <span className="hidden md:block">Log Out</span>
      </div>
    </div>
  );
};

export default Left;
