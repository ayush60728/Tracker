const food = require("../models/food");

const getDayKey = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${date}`;
};

const valueget = async (req, res) => {
  try {
    const id = req.result._id;
    const day = getDayKey();

    const userdata = await food.findOne({ userId: id, day });

    if (!userdata) {
      return res.json({ protein: 0, fats: 0, kcal: 0 }); // no entry today yet
    }

    res.json(userdata);
  } catch (err) {
    console.error("Value get controller error:", err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = valueget;