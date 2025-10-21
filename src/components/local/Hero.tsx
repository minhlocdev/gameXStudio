export const Hero: React.FC = () => {
  return (
    <div className="mx-auto my-30 flex max-h-[400px] w-[60vw] flex-col items-center justify-center gap-8 text-center">
      <h1 className="text-center text-7xl font-bold">
        Turn your ideas into real{" "}
        <span className="text-primary">exiting games</span>
      </h1>
      <p className="px-16 text-xl">
        <span className="text-primary">GameXStudio</span> specializes in
        developing and launching all gernes of games into the market
      </p>
      <div className="mt-4 flex items-center justify-between gap-8">
        <button className="border-primary text-primary hover:bg-primary rounded-xl border-2 px-6 py-2 font-semibold transition-all duration-300 hover:scale-105 hover:text-black hover:shadow-[0_0_15px_var(--color-primary)]">
          Learn more
        </button>

        <button className="bg-primary/80 hover:bg-primary cursor-pointer rounded-xl px-6 py-2 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_var(--color-primary)]">
          Contact us
        </button>
      </div>
    </div>
  );
};
