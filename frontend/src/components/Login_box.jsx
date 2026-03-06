import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login_box = () => {
    const navigate = useNavigate();
    const [firstborder, setFirstBorder] = useState(false);
    const [secondborder, setSecondBorder] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handle_register = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://mf-backend-0cqj.onrender.com/user/register", {
                name, email, password
            }, { withCredentials: true });
            console.log("User registered successfully");
            navigate("/homepage");
        } catch (err) {
            console.log("Error: " + err);
        }
    };

    const handle_login = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://mf-backend-0cqj.onrender.com/user/login", {
                email, password
            }, { withCredentials: true });
            console.log("User logged in successfully");
            navigate("/homepage");
        } catch (err) {
            console.log("Error: " + err);
        }
    };

    return (
        <div className="border border-white/10 rounded-3xl h-[600px] w-[520px] bg-[#060D1A] backdrop-blur-xl shadow-2xl shadow-black/40 p-8 flex flex-col">

            {/* Logo + Title */}
            <div className="flex items-center justify-center gap-3 mt-6">
                <img src="/public/logopart-2 (1).png" alt="" className="w-16 h-12" />
                <span className="font-bold text-white text-4xl tracking-wide">
                    Welcomes You
                </span>
            </div>

            {/* Tabs */}
            <div className="flex justify-around mt-10 border-b border-white/10">
                <div
                    onClick={() => { setFirstBorder(true); setSecondBorder(false); }}
                    className={`py-3 px-2 text-white font-bold text-2xl cursor-pointer transition-all duration-300 ${firstborder ? "border-b-2 border-blue-400 text-blue-300" : "text-white/50 hover:text-white"}`}
                >
                    Login
                </div>
                <div
                    onClick={() => { setSecondBorder(true); setFirstBorder(false); }}
                    className={`py-3 px-2 font-bold text-2xl cursor-pointer transition-all duration-300 ${secondborder ? "border-b-2 border-blue-400 text-blue-300" : "text-white/50 hover:text-white"}`}
                >
                    Register
                </div>
            </div>

            {/* Form */}
            <form
                onSubmit={secondborder ? handle_register : handle_login}
                className="mt-10 flex flex-col gap-5"
            >
                {secondborder && (
                    <div>
                        <label className="text-white/50 text-sm block mb-1 tracking-wide">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/20 outline-none focus:border-blue-500/50 transition-all duration-300"
                        />
                    </div>
                )}

                <div>
                    <label className="text-white/50 text-sm block mb-1 tracking-wide">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/20 outline-none focus:border-blue-500/50 transition-all duration-300"
                    />
                </div>

                <div>
                    <label className="text-white/50 text-sm block mb-1 tracking-wide">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/20 outline-none focus:border-blue-500/50 transition-all duration-300"
                    />
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full h-12 text-white bg-blue-950 border border-blue-500/30 font-bold rounded-2xl hover:bg-blue-800 hover:border-blue-400/50 transition-all duration-300 tracking-wide"
                    >
                        {secondborder ? "Register" : "Login"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login_box;
