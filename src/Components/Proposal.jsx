import { useRef, useState } from "react";
import propose from "../assets/proposal.gif"
import { useNavigate } from "react-router";
//eslint-disable-next-line
import { motion } from "framer-motion"

const Proposal = () => {
  const noButtonRef = useRef(null);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [isEscaping, setIsEscaping] = useState(false);
  const navigate = useNavigate();

  const moveNoButton = () => {
    const button = noButtonRef.current;
    if (!button) return;

    const margin = 8;
    const maxX = Math.max(margin, window.innerWidth - button.offsetWidth - margin);
    const maxY = Math.max(margin, window.innerHeight - button.offsetHeight - margin);
    const x = Math.floor(Math.random() * (maxX - margin + 1)) + margin;
    const y = Math.floor(Math.random() * (maxY - margin + 1)) + margin;

    setNoPosition({ x, y });
  };

  const startEscaping = () => {
    if (!isEscaping) {
      setIsEscaping(true);
    }
    moveNoButton();
  };

  return (
    <article className="relative ">
      <div
        className="pointer-events-none absolute -left-[20%] -top-[35%] h-62.5 w-62.5 rounded-full bg-[radial-gradient(circle,rgba(255,126,156,0.38)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <motion.img animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity }} className="mx-auto w-50 md:w-70" src={propose} alt="propose" />

      <motion.h1 initial={{ filter: "blur(20px)", opacity: 0 }} animate={{ filter: "blur(0px)", opacity: 1 }} transition={{ duration: 1 }} className="mb-5 mt-2 text-center font-['Pacifico',cursive] text-[clamp(1.9rem,5vw,2.7rem)] tracking-[0.02em] text-rose-700 drop-shadow-[0_4px_18px_rgba(222,31,89,0.2)]">
        Do You Love Me?
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-3 mt-10">
        <motion.button
          initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]  
          }}
          type="button"
          onClick={() => navigate("/celebration")}
          className="cursor-pointer min-w-30.5 rounded-full bg-linear-to-r from-rose-500 to-pink-400 px-5 py-3 text-base font-semibold text-white shadow-[0_10px_18px_rgba(255,63,106,0.34)] transition hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 max-[540px]:min-w-27 max-[540px]:px-4 max-[540px]:py-2.5 max-[540px]:text-[0.95rem]"
        >
          Yes
        </motion.button>
        {isEscaping && (
          <span
            aria-hidden="true"
            className="cursor-pointer min-w-30.5 rounded-full px-5 py-3 max-[540px]:min-w-27 max-[540px]:px-4 max-[540px]:py-2.5 invisible"
          >
            No
          </span>
        )}
        <motion.button
          initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]  
          }}
          ref={noButtonRef}
          type="button"
          onPointerEnter={startEscaping}
          onPointerDown={(event) => {
            event.preventDefault();
            startEscaping();
          }}
          onFocus={startEscaping}
          onTouchStart={startEscaping}
          style={
            isEscaping
              ? {
                position: "fixed",
                left: `${noPosition.x}px`,
                top: `${noPosition.y}px`,
                zIndex: 60,
              }
              : undefined
          }
          className="cursor-pointer min-w-30.5 rounded-full bg-rose-100 px-5 py-3 text-base font-semibold border border-pink-400 text-rose-700 shadow-[0_8px_16px_rgba(191,42,86,0.18)] transition hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 max-[540px]:min-w-27 max-[540px]:px-4 max-[540px]:py-2.5 max-[540px]:text-[0.95rem]"
        >
          No
        </motion.button>
      </div>
    </article>
  );
};

export default Proposal;
