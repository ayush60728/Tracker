import { Link, useLocation } from "react-router-dom";
import { motion, LayoutGroup } from "framer-motion";
import MagneticGlassItem from "./MagneticGlassItem";

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Meal", path: "/meal" },
  { name: "Workout", path: "/workout" },
  { name: "Study", path: "/study" },
];

const Left = () => {
  const location = useLocation();

  return (
    <div
      className="
        fixed top-7 left-3
        h-[90vh] w-56
        bg-[#0a1a3f]/90 backdrop-blur-xl
        text-white
        rounded-3xl
        px-6 py-8
        flex flex-col
        shadow-xl border border-white/10
      "
    >
      {/* Logo */}
      <div className="text-2xl font-semibold mb-10 tracking-wide">
        Daily Tracker
      </div>

      {/* Navigation */}
      <LayoutGroup>
        <div className="flex flex-col gap-3 text-[17px]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link key={item.name} to={item.path} className="relative">
                {/* Glass active pill */}
                {isActive && (
                  <motion.div
                    layoutId="glass-pill"
                    className="
                      absolute inset-0 rounded-2xl
                      bg-white/10 backdrop-blur-md
                      border border-white/20
                      shadow-lg
                    "
                    transition={{
                      type: "spring",
                      stiffness: 160,
                      damping: 26,
                    }}
                  />
                )}

                <MagneticGlassItem className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{
                      type: "tween",
                      ease: [0.25, 0.1, 0.25, 1],
                      duration: 0.25,
                    }}
                    className="
                      px-4 py-3 rounded-2xl
                      hover:bg-white/5
                    "
                  >
                    {item.name}
                  </motion.div>
                </MagneticGlassItem>
              </Link>
            );
          })}
        </div>
      </LayoutGroup>

      {/* Logout */}
      <MagneticGlassItem>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{
            type: "tween",
            ease: [0.25, 0.1, 0.25, 1],
            duration: 0.25,
          }}
          className="
            mt-80 px-4 py-3 rounded-2xl
            cursor-pointer text-red-300
            bg-white/5 backdrop-blur-md
            border border-white/10
            hover:bg-red-500/20
            
          "
        >
          Log Out
        </motion.div>
      </MagneticGlassItem>
    </div>
  );
};

export default Left;
