import React from 'react'

import { FaCheckCircle } from "react-icons/fa";

const Tick = () => {
    return <FaCheckCircle className="text-green-500 text-xl" />;
};


const Login_left = () => {
    return (
        <>
            <div className=' bg-[#0F1521]/98 backdrop-blur-xl h-screen w-screen flex text-white font-bold' >
                <div className='flex ml-40 mt-20'>
                    <div>
                        <div className='flex justify-center items-center h-9 gap-2 border rounded-4xl border-white w-50 px-1 bg-blue-950  backdrop-blur-xl'>
                            <div className='w-2.5 h-2 bg-blue-500 rounded-full ml-2 '></div>
                            <div className='text-1xl font-bold text-white  w-50'>Focus Mode Active</div>
                        </div>

                        <div>
                            <div className=' text-white text-5xl md:text-6xl font-extrabold leading-tight mt-8'>MASTER YOUR
                            </div>
                            <div className=' text-white text-5xl md:text-6xl font-extrabold leading-tight mt-1'>FOCUS & FLOW</div>
                            <div className='font-bold className="text-base md:text-lg text-white/70 leading-relaxed mt-2'>Your digital sanctuary for tracking meals, movement, and mind.
                                <br />Interact with your workspace to log your daily progress.</div>
                        </div>

                        <div className='flex max-w-lg mt-5'>
                            <div className='flex justify-center items-center gap-2 border rounded-2xl h-15 border-white px-2 bg-blue-950 backdrop-blur-xl w-49'>
                                <div><Tick /></div>
                                <div className='flex-col ml-1'>
                                    <div className='text-1xl font-bold w-34 flex'>DAILY GOAL</div>
                                    <div className='text-1xl  w-31'> 0/7 COMPLETED</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="src/assets/lamp.png" alt="Lamp" className="absolute w-64 top-25 right-50" />
            </div>
            <div>
                <img src="src/assets/plate.png" alt="Plate" className="absolute w-64 top-105 right-120" />
            </div>
            <div className='bg-[#0F1521]/96 h-screen'>
                <div className='text-white font-bold text-6xl text-center  relative top-3'>Real and face a studia, all in one. </div>
                <div className='flex relative left-50 top-30'>
                    <div className='border-4 h-40 w-40'></div>
                    <div className='border-4 h-40 w-40'></div>
                    <div className='border-4 h-40 w-40'></div>
                </div>
            </div>
        </>
    )
}






export default Login_left
