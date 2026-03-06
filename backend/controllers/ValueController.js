const food = require("../models/food");

const getDayKey = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${date}`; // "YYYY-MM-DD" in local time
};

const value = async (req, res) => {
  try {
    const { protein, fats, kcal } = req.body;
    const id = req.result._id;

    const day = getDayKey();

    console.log("Today's day key:", day); // helpful for debugging

    // Directly check if today's doc exists for this user (no need for 2-step check)
    const todayDoc = await food.findOne({ userId: id, day });

    if (todayDoc) {
      // Today's doc exists -> increment values
      const response = await food.findByIdAndUpdate(
        todayDoc._id,
        {
          $inc: {
            protein: Number(protein) || 0,
            fats: Number(fats) || 0,
            kcal: Number(kcal) || 0,
          },
        },
        { new: true }
      );

      return res.json({ message: "Updated today's entry", data: response });
    } else {
      // No doc for today -> create new one
      const newdata = await food.create({
        userId: id,
        day,
        protein: Number(protein) || 0,
        fats: Number(fats) || 0,
        kcal: Number(kcal) || 0,
      });

      return res.json({ message: "Created new entry for today", data: newdata });
    }
  } catch (err) {
    console.error("Value controller error:", err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = value;