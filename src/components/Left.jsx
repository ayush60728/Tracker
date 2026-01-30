import { Link } from "react-router-dom";

const Left = () => {
  return (
    <div
      className="
        fixed top-7 left-3
        h-[90vh] w-50
        bg-blue-900 text-white
        rounded-3xl
        px-6 py-8
        flex flex-col
        shadow-lg
      "
    >
      {/* Logo */}
      <div className="text-2xl font-bold">
        Daily Tracker
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-8 text-lg mt-auto mb-auto">
        <Link to="/" className="cursor-pointer hover:text-blue-300">
          Dashboard
        </Link>

        <Link to="/meal" className="cursor-pointer hover:text-blue-300">
          Meal
        </Link>

        <Link to="/workout" className="cursor-pointer hover:text-blue-300">
          Workout
        </Link>

        <Link to="/study" className="cursor-pointer hover:text-blue-300">
          Study
        </Link>
      </div>

      {/* Logout */}
      <div className="cursor-pointer text-red-300 hover:text-red-400">
        Log Out
      </div>
    </div>
  );
};

export default Left;
