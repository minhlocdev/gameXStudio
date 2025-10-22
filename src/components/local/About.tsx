export const About = () => {
  return (
    <section className="mx-10 mb-20 flex flex-col items-center justify-between gap-10 pt-16 md:mx-16 md:mb-30 md:flex-row md:px-20 lg:mx-20">
      <div className="flex w-full flex-col justify-center gap-6 md:w-[45%]">
        <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:justify-start md:text-left">
          <h1 className="text-primary text-2xl font-bold tracking-widest md:text-4xl">
            ABOUT
          </h1>
          <img src="/Logo.png" alt="Logo Image" className="" />
        </div>

        <div className="space-y-4 text-justify leading-relaxed text-neutral-300">
          <p className="text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="w-full md:w-[50%]">
        <div className="h-[400px] w-full rounded-2xl bg-black md:h-[500px]" />
      </div>
    </section>
  );
};
