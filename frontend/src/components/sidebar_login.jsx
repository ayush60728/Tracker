import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CookingPot } from "lucide-react";
import { LayoutDashboard } from "lucide-react";

const Left = () => {
    return (
        <>
            {/* DESKTOP SIDEBAR */}
            <motion.div
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="
                    hidden md:flex
                    fixed top-20 left-5
                    h-[80vh] w-25
                    bg-[#0a1a3f]/90 backdrop-blur-xl
                    text-white
                    rounded-3xl
                    px-6 py-8
                    flex-col
                    shadow-xl
                    border border-white/10
                "
            >
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <img className="w-11 h-10 ml-1" src="/Untitled design (1) (1).png" alt="" />
                </motion.div>

                {/* Navigation */}
                <div className="flex flex-col gap-6 text-lg mt-auto mb-auto">
                    <Link to="/">
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 260 }} className="px-4 py-3 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
                            <LayoutDashboard />
                        </motion.div>
                    </Link>
                    <Link to="/meal">
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 260 }} className="px-4 py-3 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
                            <CookingPot />
                        </motion.div>
                    </Link>
                    <Link to="/workout">
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 260 }} className="px-4 py-3 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
                            {/* <Dumbbell /> */}
                        </motion.div>
                    </Link>
                    <Link to="/study">
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 260 }} className="px-4 py-3 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
                            {/* <NotebookPen /> */}
                        </motion.div>
                    </Link>
                </div>
            </motion.div>

            {/* MOBILE BOTTOM NAV */}
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="
                    md:hidden fixed bottom-0 left-0 right-0 z-50
                    bg-[#0a1a3f]/90 backdrop-blur-xl
                    border-t border-white/10
                    flex justify-around items-center
                    px-4 py-3 text-white
                "
            >
                <Link to="/"><motion.div whileTap={{ scale: 0.9 }} className="px-4 py-3 rounded-xl cursor-pointer hover:bg-white/10 transition-colors"><LayoutDashboard /></motion.div></Link>
                <Link to="/meal"><motion.div whileTap={{ scale: 0.9 }} className="px-4 py-3 rounded-xl cursor-pointer hover:bg-white/10 transition-colors"><CookingPot /></motion.div></Link>
                <Link to="/workout"><motion.div whileTap={{ scale: 0.9 }} className="px-4 py-3 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">{/* <Dumbbell /> */}</motion.div></Link>
                <Link to="/study"><motion.div whileTap={{ scale: 0.9 }} className="px-4 py-3 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">{/* <NotebookPen /> */}</motion.div></Link>
            </motion.div>
        </>
    );
};

export default Left;