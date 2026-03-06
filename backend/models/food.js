const mongoose = require("mongoose");
const { Schema } = mongoose;

const foodSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    day: {
      type: String, 
      required: true,
    },
    protein: {
      type: Number,
      required: true,
      max: 10000,  // use max/min for numbers, not maxlength
    },
    kcal: {
      type: Number,
      required: true,
      max: 100000,
    },
    fats: {
      type: Number,
      required: true,
      max: 10000,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("food", foodSchema);