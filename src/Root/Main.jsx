import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Outlet } from "react-router";
import "./Main.css";
//eslint-disable-next-line
import { motion } from "framer-motion"
import logo from "../assets/NakibLogo.svg"

const hearts = Array.from({ length: 42 }, (_, i) => ({
  id: i,
  left: `${(i * 17) % 100}%`,
  delay: `${(i * 0.35).toFixed(2)}s`,
  duration: `${8 + (i % 7)}s`,
  size: `${10 + (i % 6) * 3}px`,
  type: i % 3 === 0 ? "heart outlined" : "heart solid",
}));

const Main = () => {
  const [showCredit, setShowCredit] = useState(true);

  return (
    <main className="love-scene">
      <div className="hearts-layer" aria-hidden="true">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className={heart.type}
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
              fontSize: heart.size,
            }}
          >
            ♥
          </span>
        ))}
      </div>

      <section className="content">
        <Outlet />
      </section>

      {showCredit && (
        <motion.div initial={{ x: 160 }} animate={{ x: 0 }} className="fixed bottom-3 right-3 z-50 flex items-center gap-1.5 rounded-full border border-white/35 bg-black/10 px-2.5 py-1 text-[11px] font-semibold text-rose-700 shadow-[0_8px_20px_rgba(190,24,93,0.18)] ">
          <div onClick={() => window.open("https://nakib-360.web.app/", "_blank")} className="flex justify-center items-center gap-2">
            <span>Build with</span>
            <img className="w-5" src={logo} alt="Nakib360" />
          </div>
          <button
            type="button"
            onClick={() => setShowCredit(false)}
            aria-label="Hide credit badge"
            className="cursor-pointer rounded-full bg-white/70 p-0.5 text-rose-700 transition hover:bg-white"
          >
            <IoClose className="text-xs" />
          </button>
        </motion.div>
      )}
    </main>
  );
};

export default Main;
