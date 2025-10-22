export const Hero: React.FC = () => {
  return (
    <section className="mx-10 mt-30 mb-20 flex flex-col items-center gap-8 text-center md:mt-50 md:mb-30 md:w-[60vw]">
      <h1 className="text-center text-[2rem] font-bold sm:text-3xl md:text-5xl lg:text-7xl">
        Turn your ideas into real{" "}
        <span className="text-primary">exiting games</span>
      </h1>
      <p className="text-md px-4 md:px-16 md:text-xl">
        <span className="text-primary">GameXStudio</span> specializes in
        developing and launching all gernes of games into the market
      </p>
      <div className="mt-4 flex flex-col items-center justify-between gap-8 md:flex-row">
        <button className="border-primary text-primary hover:bg-primary rounded-xl border-2 px-6 py-2 font-semibold transition-all duration-300 hover:scale-105 hover:text-black hover:shadow-[0_0_15px_var(--color-primary)]">
          Learn more
        </button>

        <button className="bg-primary/80 hover:bg-primary cursor-pointer rounded-xl px-6 py-2 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_var(--color-primary)]">
          Contact us
        </button>
      </div>
    </section>
  );
};
