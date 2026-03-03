import { Outlet } from "react-router";
import "./Main.css";

const hearts = Array.from({ length: 42 }, (_, i) => ({
  id: i,
  left: `${(i * 17) % 100}%`,
  delay: `${(i * 0.35).toFixed(2)}s`,
  duration: `${8 + (i % 7)}s`,
  size: `${10 + (i % 6) * 3}px`,
  type: i % 3 === 0 ? "heart outlined" : "heart solid",
}));

const Main = () => {
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
        <Outlet/>
      </section>
    </main>
  );
};

export default Main;
