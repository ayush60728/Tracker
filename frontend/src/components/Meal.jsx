import axios from "axios";

axios.defaults.withCredentials = true;
import { useState } from "react";
import Valuecard from "../components/Valuecard";
import Give_value from "./Give_value";

const Meal = () => {
  const [breakfastmeal, setbreakfastmeal] = useState("");
  const [lunchmeal, setlunchmeal] = useState("");
  const [snaksmeal, setsnaksmeal] = useState("");
  const [dinnermeal, setdinnermeal] = useState("");

  const [breakfastquantity, setbreakfastquantity] = useState("");
  const [lunchquantity, setlunchquantity] = useState("");
  const [snaksquantity, setsnaksquantity] = useState("");
  const [dinnerquantity, setdinnerquantity] = useState("");

  const [data, setdata] = useState("");

  const handle_add_meal = async (type) => {
    try {
      let meal, quantity;

      if (type === "breakfast") {
        meal = breakfastmeal;
        quantity = breakfastquantity;
      } else if (type === "lunch") {
        meal = lunchmeal;
        quantity = lunchquantity;
      } else if (type === "snack") {
        meal = snaksmeal;
        quantity = snaksquantity;
      } else if (type === "dinner") {
        meal = dinnermeal;
        quantity = dinnerquantity;
      }

      if (!type || !meal || !quantity) return;

      const response = await axios.post(
        "https://mf-backend-0cqj.onrender.com/api/ai",
        { meal, quantity },
        { withCredentials: true }
      );

      const aiData = response.data.response;
      setdata(aiData);
      return aiData;
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  return (
    <div className="flex-1 ml-16 md:ml-0 p-4 md:p-8 bg-[#060D1A]/98 min-h-screen text-white">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold">Meals Today 🍽️</h1>
        <p className="text-white/40 text-sm md:text-base">Track what you eat throughout the day</p>
      </div>

      {/* Meal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="border bg-[#060D1A]/98 rounded-2xl hover:border-blue-500/80 transition-all duration-200">
          <MealCard
            title="Breakfast"
            emoji="🍳"
            meal={breakfastmeal}
            setmeal={setbreakfastmeal}
            quantity={breakfastquantity}
            setquantity={setbreakfastquantity}
            onAdd={() => handle_add_meal("breakfast")}
          />
        </div>
        <div className="border bg-[#060D1A]/98 rounded-2xl hover:border-blue-500/80 transition-all duration-200">
          <MealCard
            title="Lunch"
            emoji="🍛"
            meal={lunchmeal}
            setmeal={setlunchmeal}
            quantity={lunchquantity}
            setquantity={setlunchquantity}
            onAdd={() => handle_add_meal("lunch")}
          />
        </div>
        <div className="border bg-[#060D1A]/98 rounded-2xl hover:border-blue-500/80 transition-all duration-200">
          <MealCard
            title="Snacks"
            emoji="🍎"
            meal={snaksmeal}
            setmeal={setsnaksmeal}
            quantity={snaksquantity}
            setquantity={setsnaksquantity}
            onAdd={() => handle_add_meal("snack")}
          />
        </div>
        <div className="border bg-[#060D1A]/98 rounded-2xl hover:border-blue-500/80 transition-all duration-200">
          <MealCard
            title="Dinner"
            emoji="🍽️"
            meal={dinnermeal}
            setmeal={setdinnermeal}
            quantity={dinnerquantity}
            setquantity={setdinnerquantity}
            onAdd={() => handle_add_meal("dinner")}
          />
        </div>
      </div>

      {/* Keep your existing component */}
      <div className="mt-8">
        <Valuecard />
      </div>
    </div>
  );
};

const MealCard = ({ title, emoji, meal, setmeal, quantity, setquantity, onAdd }) => {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 md:p-6 w-full hover:border-blue-500/80 transition-all duration-200">
      <h2 className="text-base md:text-lg font-semibold mb-4 flex items-center gap-2 text-white/90">
        <span>{emoji}</span> {title}
      </h2>

      <div className="flex flex-col gap-3 md:gap-4">
        <input
          type="text"
          placeholder="Meal name"
          value={meal}
          onChange={(e) => setmeal(e.target.value)}
          className="bg-[#060D1A]/60 border border-white/10 rounded-xl px-4 py-2 text-white/80 placeholder:text-white/30 outline-none focus:border-blue-500/80 transition"
        />
        <input
          type="text"
          placeholder="Quantity (e.g. 200g)"
          value={quantity}
          onChange={(e) => setquantity(e.target.value)}
          className="bg-[#060D1A]/60 border border-white/10 rounded-xl px-4 py-2 text-white/80 placeholder:text-white/30 outline-none focus:border-blue-500/80 transition"
        />

        <button
          onClick={async () => {
            const aiData = await onAdd();
            if (aiData) Give_value(aiData);
          }}
          className="bg-blue-500/50 text-white py-2 rounded-xl hover:bg-blue-800 transition font-medium"
        >
          + Add Meal
        </button>
      </div>
    </div>
  );
};

export default Meal;
