import React, { useState } from 'react'

const Login_box = () => {
    const [firstborder, setFirstBorder] = useState(false);
    const [secondborder, setSecondBorder] = useState(false);

    return (
        <>
            <div className='bg-black/30 backdrop-blur-sm h-screen w-screen flex items-center justify-center'>
                <div className='border-2 border-white/20 rounded-3xl h-[600px] w-[520px] bg-[#0F1521]/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 p-8 flex flex-col'>

                    {/* Logo + Title */}
                    <div className='flex items-center justify-center gap-3 mt-6'>
                        <img src="src/assets/logopart-2 (1).png" alt="" className='w-16 h-12' />
                        <span className='font-bold text-white text-4xl tracking-wide'>
                            Welcomes You
                        </span>
                    </div>

                    {/* Tabs */}
                    <div className='flex justify-around mt-10'>
                        <div
                            onClick={() => { setFirstBorder(true); setSecondBorder(false) }}
                            className={`${firstborder ? "border-b-2 border-blue-400 w-40" : ""} 
                            py-3 px-2 text-white font-bold text-2xl cursor-pointer `}>
                            Login
                        </div>

                        <div
                            onClick={() => { setSecondBorder(true); setFirstBorder(false) }}
                            className={`${secondborder ? "border-b-2 border-blue-400 w-40" : ""} 
                            py-3 px-2 text-white font-bold text-2xl cursor-pointer `}>
                            SignUp
                        </div>
                    </div>

                    {/* Form */}
                    <div className='mt-12 space-y-6'>

                        <div>
                            <label className='text-white text-sm block mb-2'>
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-[#0F1521] border border-gray-600 rounded-xl px-5 py-2 text-white outline-none focus:border-blue-500 transition-all duration-300"
                            />
                        </div>

                        <div>
                            <label className='text-white text-sm block mb-2'>
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full bg-[#0F1521] border border-gray-600 rounded-xl px-5 py-2 text-white outline-none focus:border-blue-500 transition-all duration-300"
                            />
                        </div>

                        <div className='pt-6'>
                            <button className='w-full h-10 text-white bg-blue-950 font-bold rounded-2xl hover:bg-blue-700 transition-all duration-300'>
                                Login
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Login_box
