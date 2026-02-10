import React from 'react'

import { FaCheckCircle } from "react-icons/fa";

const Tick = () => {
    return <FaCheckCircle className="text-green-500 text-xl" />;
};


const Login_left = () => {
    return (
        <>
            <div className=' bg-[#0F1521]/98 backdrop-blur-xl h-screen w-screen flex text-white font-bold overflow-x-hidden' >
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
                <img src="src/assets/lamp.png" alt="Lamp" className="absolute w-64 top-25 right-50 transform-gpu hover:scale-110 delay-100 duration-400 transition-all" />
                <img src="src/assets/bulb.png" alt="" className='absolute w-64 top-40 right-53 transform-gpu hover:scale-110 delay-100 duration-400 transition-all' />
            </div>
            <div>
                <img src="src/assets/plate.png" alt="Plate" className="absolute w-64 top-105 right-120 transform-gpu rotate-0 hover:rotate-180 transition-transform duration-1000 ease-out" /> </div>
            <div className='bg-[#0F1521]/96 h-screen w-screen overflow-x-hidden'>
                <div className='text-white font-bold text-6xl text-center relative top-3'>Real and face a studia, all in one. </div>

                <div className='flex relative left-40 top-30 gap-5'>
                    <div className='border-4 rounded-2xl h-120 w-105 bg-[#0F1521]/96'>
                        <img src="src/assets/book.pixel.png" alt="" className='h-70 w-80 relative left-12' />
                        <div className='font-bold text-4xl relative text-center text-white underline'>Study Tracker</div>
                        <div className='font-bold text-white text-2xl mt-5 relative text-center'>Organize your study schedule <br />and keep track of your <br />assignments and goals.</div>
                    </div>
                    <div className='border-4 rounded-2xl h-120 w-105 bg-[#0F1521]/96'>
                        <img className='h-63 w-80 relative left-12' src="src/assets/calendar.pixel.png" alt="" />
                        <div className='font-bold text-4xl relative text-center text-white underline'>Meal Planner</div>
                        <div className='font-bold text-white text-2xl mt-5 relative text-center'>Plan your meals, track your nutrition, and stay healthy with personalized meal logs.</div>
                    </div>
                    <div className='border-4 rounded-2xl h-120 w-105 bg-[#0F1521]/96'>
                        <img className='h-63 w-80 relative left-12' src="src/components/dumbbell (1).png" alt="" />
                        <div className='font-bold text-4xl relative text-center text-white underline'>Workout Tracker</div>
                        <div className='font-bold text-white text-2xl mt-5 relative text-center'>Log your workouts, track your progress, and reach your fitness goals.</div>
                    </div>
                </div>
            </div>
            <div className='absolute'>
                <div className='border w-screen border-white'> </div>
                <div className='h-100 bg-gradient-to-b from-[#070C15] to-[#0B1A2E] flex'>
                    <div className='relative text-white mx-auto'>
                        <ul className='flex gap-20 font-bold text-3xl mt-10 underline'>

                            <li>About Us </li>
                            <span>|</span>
                            <li>Contact </li>
                            <span>|</span>
                            <li>Privacy Policy </li>
                            <span>|</span>
                            <li>Terms of Service </li>
                        </ul>
                        <span className='flex relative top-40 font-bold text-2xl'>© 2024 Tracker. All rights reserved.</span>

                        <span className='flex relative top-45 font-bold text-2xl'>Need Help?
                            <span className='underline'> support@tracker.com</span>
                        </span>

                    </div>
                </div>
            </div>
            <div className='absolute flex '>
                <a href="https://www.linkedin.com/in/ayush-kumar-13a0b2336/?skipRedirect=true" target='_blank'>
                    <img src="src/assets/linkedin.png" alt="" className='relative w-40 h-50 left-300 top-49' />
                </a>
            </div>
            <div className='absolute flex '>
                <a href="https://www.linkedin.com/in/ayush-kumar-13a0b2336/?skipRedirect=true" target='_blank'>
                    <img src="src/assets/linkedin.png" alt="" className='relative w-40 h-50 left-300 top-49' />
                </a>
            </div>
            <div className='absolute flex '>
                <a href="https://www.linkedin.com/in/ayush-kumar-13a0b2336/?skipRedirect=true" target='_blank'>
                    <img src="src/assets/x.png" alt="" className='relative w-25 h-45 left-270 top-54' />
                </a>
            </div>
        </>
    )
}






export default Login_left
