import { useEffect, useState } from "react";
import axios from "axios";

const Valuecard = () => {
  const [data, setdata] = useState(null);
  
  const getdData = async () => {

    const result = await axios.get("http://localhost:3000/value/get",
      { withCredentials: true })
    setdata(result.data);
    console.log(result?.data);
  }

  useEffect(() => {
    getdData();
  }, [])

 
  return (
    <div className="mt-10 max-w-5xl ml-8">
      <div className="bg-[#0a1a3f]/30 backdrop-blur-md border-2 border-white/60 shadow-md rounded-2xl px-10 py-6 flex items-center justify-between">

        {/* <button onClick={} className="w-20 h-12 rounded-xl bg-blue-600/15 flex items-center justify-center text-blue-600 font-bold">Refresh</button> */}

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-600/30 flex items-center justify-center text-white font-bold">
            P
          </div>
          <div>
            <div className="text-gray-500 text-sm font-medium text-white/80">Protein</div>
            <div className="text-2xl font-bold text-white/90">{data?.protein}</div>
          </div>
        </div>

        <div className="h-12 w-[1px] bg-gray-200" />

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-600/30 flex items-center justify-center text-white font-bold">
            F
          </div>
          <div>
            <div className="text-gray-500 text-sm font-medium text-white/80">Fats</div>
            <div className="text-2xl font-bold text-white/80">{data?.fats}</div>
          </div>
        </div>

        <div className="h-12 w-[1px] bg-gray-200" />

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-600/30 flex items-center justify-center text-white font-bold">
            K
          </div>
          <div>
            <div className="text-gray-500 text-sm font-medium text-white/80">Kcal</div>
            <div className="text-2xl font-bold text-white/80">{data?.kcal}</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Valuecard;