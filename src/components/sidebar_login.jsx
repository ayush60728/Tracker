import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut } from 'lucide-react'
import { CookingPot } from "lucide-react"
import { NotebookPen } from 'lucide-react'
import { Dumbbell } from 'lucide-react'
import { LayoutDashboard } from "lucide-react";


const Left = () => {
    return (
        <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="
        fixed top-7 left-3
        h-[90vh] w-25
        bg-[#0a1a3f]/90 backdrop-blur-xl
        text-white
        rounded-3xl
        px-6 py-8
        flex flex-col
        shadow-xl
        border border-white/10
      "
        >
            {/* Logo */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold mb-10"
            >
                Dgf 
            </motion.div>

            {/* Navigation */}
            <div className="flex flex-col gap-6 text-lg mt-auto mb-auto">
                <Link to="/">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 260 }}
                        className="
              px-4 py-3 rounded-xl
              cursor-pointer
              hover:bg-white/10
              transition-colors
            "
                    >
                       <LayoutDashboard /> 
                    </motion.div>
                </Link>

                <Link to="/meal">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 260 }}
                        className="
              px-4 py-3 rounded-xl
              cursor-pointer
              hover:bg-white/10
              transition-colors
            "
                    >
                      <CookingPot /> 
                    </motion.div>
                </Link>

                <Link to="/workout">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 260 }}
                        className="
              px-4 py-3 rounded-xl
              cursor-pointer
              hover:bg-white/10
              transition-colors
            "
                    >
                      <Dumbbell /> 
                    </motion.div>
                </Link>

                <Link to="/study">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 260 }}
                        className="
              px-4 py-3 rounded-xl
              cursor-pointer
              hover:bg-white/10
              transition-colors
            "
                    >
                      <NotebookPen />
                    </motion.div>
                </Link>
            </div>

            {/* Logout */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 260 }}
                className="
          px-4 py-3 rounded-xl
          cursor-pointer
          text-red-300
          bg-white/5
          border border-white/10
          hover:bg-red-500/20
          transition-colors
        "
            >
               <LogOut />
            </motion.div>
        </motion.div>
    );
};

export default Left;



