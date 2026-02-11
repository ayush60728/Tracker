import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Tick = () => {
    return <FaCheckCircle className="text-green-500 text-xl" />;
};

const Login_left = () => {
    return (
        <>
            {/* HERO SECTION */}
            <div className="bg-[#0F1521]/98 backdrop-blur-xl min-h-screen w-screen flex text-white font-bold overflow-x-hidden">
                <div className="flex ml-40 mt-20">
                    <div>
                        {/* Focus Badge */}
                        <div className="flex justify-center items-center h-9 gap-2 border rounded-full border-white w-52 px-2 bg-blue-950 backdrop-blur-xl">
                            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                            <div className="text-lg font-bold text-white">
                                Focus Mode Active
                            </div>
                        </div>

                        {/* Heading */}
                        <div>
                            <div className="text-5xl md:text-6xl font-extrabold leading-tight mt-8">
                                MASTER YOUR
                            </div>
                            <div className="text-5xl md:text-6xl font-extrabold leading-tight mt-1">
                                FOCUS & FLOW
                            </div>

                            <div className="text-base md:text-lg text-white/70 leading-relaxed mt-4">
                                Your digital sanctuary for tracking meals, movement, and mind.
                                <br />
                                Interact with your workspace to log your daily progress.
                            </div>
                        </div>

                        {/* Daily Goal Card */}
                        <div className="flex max-w-lg mt-6">
                            <div className="flex items-center gap-3 border rounded-2xl h-16 border-white px-4 bg-blue-950 backdrop-blur-xl w-52">
                                <Tick />
                                <div>
                                    <div className="text-lg font-bold">DAILY GOAL</div>
                                    <div className="text-sm">0/7 COMPLETED</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Images */}
            <img
                src="src/assets/lamp.png"
                alt="Lamp"
                className="absolute w-64 top-24 right-52 hover:scale-110 transition-all duration-300"
            />
            
            <img
                src="src/assets/bulb.png"
                alt="Bulb"
                className="absolute w-64 top-40 right-55 hover:scale-110 transition-all duration-300"
            />

            <img
                src="src/assets/plate.png"
                alt="Plate"
                className="absolute w-64 top-[420px] right-[480px] hover:rotate-180 transition-transform duration-1000"
            />

            {/* FEATURES SECTION */}
            <div className="bg-[#0F1521]/96 min-h-screen w-screen overflow-x-hidden py-20">
                <div className="text-white font-bold text-6xl text-center mb-20">
                    Real and face a studia, all in one.
                </div>

                <div className="flex justify-center gap-10">
                    {/* Study */}
                    <div className="border-4 rounded-2xl h-[500px] w-[420px] bg-[#0F1521]/96 p-6 text-center">
                        <img
                            src="src/assets/book.pixel.png"
                            alt=""
                            className="h-64 mx-auto"
                        />
                        <div className="font-bold text-3xl text-white underline mt-4">
                            Study Tracker
                        </div>
                        <div className="font-bold text-white text-xl mt-4">
                            Organize your study schedule and keep track of your assignments
                            and goals.
                        </div>
                    </div>

                    {/* Meal */}
                    <div className="border-4 rounded-2xl h-[500px] w-[420px] bg-[#0F1521]/96 p-6 text-center">
                        <img
                            src="src/assets/calendar.pixel.png"
                            alt=""
                            className="h-64 mx-auto"
                        />
                        <div className="font-bold text-3xl text-white underline mt-4">
                            Meal Planner
                        </div>
                        <div className="font-bold text-white text-xl mt-4">
                            Plan your meals, track your nutrition, and stay healthy with
                            personalized meal logs.
                        </div>
                    </div>

                    {/* Workout */}
                    <div className="border-4 rounded-2xl h-[500px] w-[420px] bg-[#0F1521]/96 p-6 text-center">
                        <img
                            src="src/components/dumbbell (1).png"
                            alt=""
                            className="h-64 mx-auto"
                        />
                        <div className="font-bold text-3xl text-white underline mt-4">
                            Workout Tracker
                        </div>
                        <div className="font-bold text-white text-xl mt-4">
                            Log your workouts, track your progress, and reach your fitness
                            goals.
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="border-t border-white bg-gradient-to-b from-[#070C15] to-[#0B1A2E] py-16 text-white text-center">
                <ul className="flex justify-center gap-10 font-bold text-2xl underline">
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>

                <div className="mt-16 font-bold text-xl">
                    © 2024 Tracker. All rights reserved.
                </div>

                <div className="mt-4 font-bold text-xl">
                    Need Help?{" "}
                    <span className="underline">support@tracker.com</span>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-8 mt-10">
                    <a
                        href="https://www.linkedin.com/in/ayush-kumar-13a0b2336/?skipRedirect=true"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="src/assets/linkedin.png" alt="" className="w-10" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ayush-kumar-13a0b2336/?skipRedirect=true"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="src/assets/x.png" alt="" className="w-8" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Login_left;
