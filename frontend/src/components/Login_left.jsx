import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Login_box from "../components/Login_box";

const Tick = () => <FaCheckCircle className="text-green-400 text-xl" />;

const Login_left = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            {/* HERO SECTION */}
            <div className="relative bg-[#060D1A] min-h-screen w-screen flex text-white overflow-x-hidden">

                {/* Grid overlay */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-10"
                    style={{
                        backgroundImage: "linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg, #ffffff22 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                <div className="flex lg:ml-40 mt-28 px-6 lg:px-0 z-10">
                    <div>
                        {/* Focus Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-center items-center h-9 gap-2 border rounded-full border-blue-500/50 w-52 px-2 bg-blue-950 backdrop-blur-xl"
                        >
                            <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse" />
                            <div className="text-sm font-bold text-white tracking-wide">
                                Focus Mode Active
                            </div>
                        </motion.div>

                        {/* Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="text-6xl md:text-7xl font-extrabold leading-tight mt-8 tracking-tight">
                                MASTER YOUR
                            </div>
                            <div className="text-6xl md:text-7xl font-extrabold leading-tight mt-1 tracking-tight bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                                FOCUS & FLOW
                            </div>
                            <div className="text-base md:text-lg text-white/50 leading-relaxed mt-5 max-w-md font-normal">
                                Your digital sanctuary for tracking meals, movement, and mind.
                                Interact with your workspace to log your daily progress.
                            </div>
                        </motion.div>

                        {/* Daily Goal Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-4 border rounded-2xl h-16 border-white/10 px-5 bg-white/5 backdrop-blur-xl w-64 mt-8"
                        >
                            <Tick />
                            <div className="flex flex-col">
                                <div className="text-sm font-bold tracking-widest text-white/90">DAILY GOAL</div>
                                <div className="text-xs text-white/40 font-medium">0 / 7 COMPLETED</div>
                            </div>
                            <div className="ml-auto text-xs font-bold text-white/40 bg-white/10 px-2 py-1 rounded-lg">
                                0%
                            </div>
                        </motion.div>

                        <motion.button
                            onClick={() => setVisible(true)}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold text-lg rounded-2xl shadow-xl shadow-blue-600/20 hover:shadow-blue-500/20 transition-all duration-300 tracking-wide"
                        >
                            Got the guts? Transform and prove it. →
                        </motion.button>


                    </div>
                </div>

                {/* Floating Images */}
                {/* Floating Images (Hidden on Mobile) */}
                <motion.img
                    src="src/assets/lamp.png"
                    alt="Lamp"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 40px rgba(96,165,250,0.9))" }}
                    className="hidden lg:block absolute w-64 top-24 right-52 cursor-pointer"
                    style={{ filter: "drop-shadow(0 0 15px rgba(96,165,250,0.3))" }}
                />

                <motion.img
                    onClick={() => setVisible(true)}
                    src="src/assets/bulb.png"
                    alt="Bulb"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 40px rgba(96,165,250,0.9))" }}
                    className="hidden lg:block absolute w-64 top-40 right-55 cursor-pointer"
                    style={{ filter: "drop-shadow(0 0 15px rgba(96,165,250,0.3))" }}
                />

                <motion.img
                    onClick={() => setVisible(true)}
                    src="src/assets/plate.png"
                    alt="Plate"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 40px rgba(96,165,250,0.9))" }}
                    className="hidden lg:block absolute w-64 top-[420px] right-[480px] cursor-pointer"
                    style={{ filter: "drop-shadow(0 0 15px rgba(96,165,250,0.3))" }}
                />
            </div>

            {/* FEATURES SECTION */}
            <div className="relative bg-[#060D1A] min-h-screen w-screen overflow-x-hidden py-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white font-extrabold text-5xl text-center mb-4 tracking-tight"
                >
                    Everything you need,
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-16"
                >
                    all in one place.
                </motion.div>

                <div className="flex justify-center gap-8">
                    {/* Study */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="border border-white/10 rounded-3xl h-[480px] w-[380px] bg-white/5 backdrop-blur-xl p-8 text-center shadow-xl shadow-black/40 hover:border-blue-500/40 transition-all duration-300"
                    >
                        <img src="src/assets/book.pixel.png" alt="" className="h-56 mx-auto object-contain" />
                        <div className="font-bold text-2xl text-white mt-6">Study Tracker</div>
                        <div className="text-white/50 text-base mt-3 leading-relaxed font-normal">
                            Organize your study schedule and keep track of assignments and goals.
                        </div>
                    </motion.div>

                    {/* Meal */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="border border-white/10 rounded-3xl h-[480px] w-[380px] bg-white/5 backdrop-blur-xl p-8 text-center shadow-xl shadow-black/40 hover:border-blue-500/40 transition-all duration-300"
                    >
                        <img src="src/assets/calendar.pixel.png" alt="" className="h-56 mx-auto object-contain" />
                        <div className="font-bold text-2xl text-white mt-6">Meal Planner</div>
                        <div className="text-white/50 text-base mt-3 leading-relaxed font-normal">
                            Plan your meals, track nutrition, and stay healthy every day.
                        </div>
                    </motion.div>

                    {/* Workout */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="border border-white/10 rounded-3xl h-[480px] w-[380px] bg-white/5 backdrop-blur-xl p-8 text-center shadow-xl shadow-black/40 hover:border-blue-500/40 transition-all duration-300"
                    >
                        <img src="src/assets/dumbbell (1).png" alt="" className="h-56 mx-auto object-contain" />
                        <div className="font-bold text-2xl text-white mt-6">Workout Tracker</div>
                        <div className="text-white/50 text-base mt-3 leading-relaxed font-normal">
                            Log workouts, track progress, and reach your fitness goals.
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="bg-[#060D1A] border-t border-white/10 py-16 text-white text-center">
                <ul className="flex justify-center gap-10 font-semibold text-lg text-white/60">
                    <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
                    <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
                </ul>
                <div className="mt-12 text-white/80 text-sm">©️ 2024 Tracker. All rights reserved.</div>
                <div className="mt-2 text-white/40 text-sm">
                    {/* Need Help? <span className="underline text-white/60">support@tracker.com</span> */}
                </div>
                <div className="flex justify-center gap-8 mt-8">
                    <a href="https://www.linkedin.com/in/ayush-kumar-13a0b2336/?skipRedirect=true" target="_blank" rel="noreferrer">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0a1a3f] border border-white/10 hover:border-blue-500/40 transition-all duration-300">
                            <img src="src/assets/link.png" alt="LinkedIn" className="w-6" />
                        </div>
                    </a>
                    <a href="https://x.com/nerdycat0" target="_blank" rel="noreferrer">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0a1a3f] border border-white/10 hover:border-blue-500/40 transition-all duration-300">
                            <img src="src/assets/xx.png" alt="X" className="w-8 rounded-2xl" />
                        </div>
                    </a>
                </div>

            </div>

            {/* LOGIN OVERLAY */}
            {visible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-md z-10 flex items-center justify-center"
                >
                    <Login_box />
                    <button
                        onClick={() => setVisible(false)}
                        className="absolute top-10 right-10 text-white/60 hover:text-white text-3xl transition-colors"
                    >
                        ✕
                    </button>
                </motion.div>
            )}
        </>
    );
};

export default Login_left;