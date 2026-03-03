import celebration from "../assets/celebration.gif";

const Celebration = () => {
  return (
    <section className="px-4 py-8 text-center md:px-8 md:py-12">
      <img
        src={celebration}
        alt="Happy celebration"
        className="mx-auto mb-6 w-44 md:w-56"
      />

      <h1 className="font-['Pacifico',cursive] text-[clamp(2rem,5vw,3rem)] text-rose-700 drop-shadow-[0_5px_18px_rgba(219,39,119,0.25)]">
        I know you love me.
      </h1>

      <p className="mx-auto font-['Pacifico',cursive] mt-4 max-w-xl text-[clamp(1rem,2.3vw,1.15rem)] font-medium leading-relaxed text-rose-700/90">
        No room for hate here, only love, smiles, and forever together vibes.
      </p>
    </section>
  );
};

export default Celebration;
