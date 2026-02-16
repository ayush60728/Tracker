import { useState, useEffect } from "react";

const Workout = () => {
  /* ---------------- DATE ---------------- */
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  /* ---------------- STOPWATCH STATE ---------------- */
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [savedTime, setSavedTime] = useState(null);

  /* ---------------- STOPWATCH LOGIC ---------------- */
  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  /* ---------------- HELPERS ---------------- */
  const formatTime = (sec) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const addTime = () => {
    setSavedTime(formatTime(seconds));
    setIsRunning(false);
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="flex-1 p-8 bg-gray-200 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">Workout Today 💪</h1>
        <p className="text-gray-500">
          Track muscles trained, sets, and workout time
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-8 max-w-5xl">

        {/* MUSCLE CARD */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Muscles Trained 🏋️
          </h2>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Muscle group (e.g. Chest)"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="number"
              placeholder="Number of sets"
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />

            <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              + Add Workout
            </button>
          </div>
        </div>

        {/* STOPWATCH CARD */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Workout Time ⏱️
          </h2>

          <div className="flex flex-col gap-4 items-center">

            {/* Date */}
            <div className="text-gray-600">
              <span className="font-medium">Date:</span> {today}
            </div>

            {/* Stopwatch Display */}
            <div
              className={`text-4xl font-mono ${
                isRunning ? "animate-pulse text-green-600" : "text-gray-800"
              }`}
            >
              {formatTime(seconds)}
            </div>

            {/* Controls */}
            <div className="flex gap-3">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                {isRunning ? "Stop" : "Start"}
              </button>

              <button
                onClick={() => setSeconds(0)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Reset
              </button>

              <button
                onClick={addTime}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Add
              </button>
            </div>

            {/* Saved Time */}
            {savedTime && (
              <div className="text-green-700 font-medium">
                Saved Workout Time: {savedTime}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Workout;
