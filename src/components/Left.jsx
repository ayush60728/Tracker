const Left = () => {
  return (
    <div className="h-195 ml-3 mt-7 w-50 bg-blue-900 text-white rounded-l-3xl rounded-r-3xl px-6 py-8 flex flex-col shadow-lg">
      
      {/* Logo */}
      <div className="text-2xl flex font-bold">
        Daily Tracker
      </div>
      <p className="text-2xl font-bold flex "></p>

      {/* Navigation */}
      <div className="flex flex-col gap-8 text-lg mt-60">
       <div className="cursor-pointer hover:text-blue-300 flex items-center gap-3">Dashboard</div>
        <div className="cursor-pointer hover:text-blue-300">Meal</div>
        <div className="cursor-pointer hover:text-blue-300">Workout</div>
        <div className="cursor-pointer hover:text-blue-300">Study</div>
      </div>

      {/* Logout */}
      <div className="cursor-pointer text-red-300 hover:text-red-400 mt-45 ">
        Log Out
      </div>
    </div>
  );
};

export default Left;
