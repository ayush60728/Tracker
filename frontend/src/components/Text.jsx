import LineChart from "../components/LineChart";
import { Link , useNavigate } from "react-router-dom";

const Text = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex-1 ml-5 p-8 min-h-screen w-full bg-[#060D1A]/98 text-white">
      {/* Grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg, #ffffff22 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Greeting */}
      <h1 className="text-3xl font-semibold mb-6 relative">
        Hi <span className="text-blue-400"></span> 👋
        <br />
        <span className="text-lg text-white">Welcome back</span>
      </h1>

      {/* Big summary card */}
      <div className="relative border-2 border-white/60  bg-[#0a1a3f]/30 backdrop-blur-xl rounded-2xl h-75 w-220 mb-8 p-6 text-white hover:border-blue-500/80 transition-all duration-200 font-bold">
        Need Help ?

        <Link
          to="/chat"
          className="relative border-white border bg-blue-800 pl-2 pt-1 pb-1 pr-2 hover:bg-green-500 hover:text-black/98 text-white/80 rounded-2xl  w-40 right-13 top-50">
          Start Talking Now!
        </Link>

        <div className="border-b-2 w-25"></div>
        <div className="relative left-70 font-bold text-2xl">UstaadJi</div>
        <div className="relative  left-63 font-bold text-1xl top-1 text-gray-400">Your Fitness Assistant</div>
        <div className="border-b-2 w-58 relative left-55 top-4 border-2 rounded-4xl text-gray-400"></div>
        <img className="h-100 flex relative left-80 bottom-47" src="/roboto (2).png" alt="" />
      </div>

      {/* {small card}
      <div className="relative flex gap-6 mb-8">
        <div className="border-2 border-white/60 bg-white/5 backdrop-blur-xl rounded-2xl h-24 w-60 p-4 text-white hover:border-blue-500/80 transition-all duration-200">
          🍽 Meals
        </div>

        <div className="border-2 border-white/60 bg-white/5 backdrop-blur-xl rounded-2xl h-24 w-60 p-4 text-white hover:border-blue-500/80 transition-all duration-200">
          🏋️ Workout
        </div>

        <div className="border-2 border-white/60 bg-white/5 backdrop-blur-xl rounded-2xl h-24 w-60 p-4 text-white hover:border-blue-500/80 transition-all duration-200">
          📚 Study
        </div>
      </div> */}


      {/* Bottom section */}
      <div className="flex gap-6">
        <div className="bg-[#0a1a3f]/30 border-white/60
      border-2 backdrop-blur-xl rounded-2xl  p-4  overflow-hidden hover:border-blue-500/80 transition-all duration-200 w-220 h-80
      1">
          <p className=" text-white font-bold mb-2 flex justify-center items-center">Nutrition Chart</p>
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Text;



