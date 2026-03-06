import axios from "axios";

axios.defaults.withCredentials = true;
const Give_value = async (data) => {
  // console.log(data);
  const { protein, fats, kcal } = data;
  try {

    await axios.post("https://mf-backend-0cqj.onrender.com/value/store", {
      protein,
      kcal,
      fats
    },
      { withCredentials: true });

    alert("Data updated")

  }
  catch (err) {
    console.log("Error updating data:", err);
  }
};

export default Give_value;
