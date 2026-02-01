const Text = () => {
  return (
    <div className="flex-1 p-8">
      
      {/* Greeting */}
      <h1 className="text-3xl font-semibold mb-6">
        Hi, <span className="text-blue-600">Ayush</span> 👋  
        <br/>
        <span className="text-lg text-gray-500">Welcome back</span>
      </h1>

      {/* Big summary card */}
      <div className="bg-white rounded-2xl shadow-md h-40 mb-8 p-6">
        Weekly Progress Overview
      </div>

      {/* Small cards */}
      <div className="flex gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-md h-24 w-60 p-4">
          🍽 Meals
        </div>
        <div className="bg-white rounded-2xl shadow-md h-24 w-60 p-4">
          🏋️ Workout
        </div>
        <div className="bg-white rounded-2xl shadow-md h-24 w-60 p-4">
          📚 Study
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex gap-6">
        <div className="bg-white rounded-2xl shadow-md h-64 w-1/2 p-6">
          Activity Chart
        </div>
        <div className="bg-white rounded-2xl shadow-md h-64 w-1/2 p-6">
          Calendar
        </div>
      </div>

    </div>
  );
};

export default Text;
