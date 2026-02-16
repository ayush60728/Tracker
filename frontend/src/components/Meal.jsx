const Meal = () => {
  return (
    <div className="flex-1 p-8 bg-gray-200 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">
          Meals Today 🍽️
        </h1>
        <p className="text-gray-500">
          Track what you eat throughout the day
        </p>
      </div>

      {/* Meal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        <MealCard title="Breakfast" emoji="🍳" />
        <MealCard title="Lunch" emoji="🍛" />
        <MealCard title="Snacks" emoji="🍎" />
        <MealCard title="Dinner" emoji="🍽️" />
      </div>
    </div>
  );
};

const MealCard = ({ title, emoji }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span>{emoji}</span> {title}
      </h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Meal name"
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          placeholder="Quantity (e.g. 200g)"
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          + Add Meal
        </button>
      </div>
    </div>
  );
};

export default Meal;