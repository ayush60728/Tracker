import axios from "axios";

const Give_value = async (data) => {
  // console.log(data);
  const { protein, fats, kcal } = data;
  try {

    await axios.post("http://localhost:3000/value/store", {
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