import { useState } from "react";

interface ProductsProps {
  text: string;
}

const productsData: ProductsProps[] = [
  {
    text: "A game that is suitable to all ages, in which you are a game creator, you are free to use your imagination to build your own fantasy game world. EBIZBOX - A kind of Sandbox game which is friendly to players, and flexible for them to build items, and even characters. With Game Maker, and Vox Edit you are the master of creating your own character, you can be anything you want – A ferocious beast, a fierce dragon or a Index, it all depends on your will. You are the master of your game!",
  },
  {
    text: "This is another awesome product with immersive gameplay and a deep creative experience. Build, explore, and share your world effortlessly with cutting-edge tools designed for everyone.",
  },
  {
    text: "An adventure game that takes players through dynamic worlds full of stories and challenges. Customize, craft, and conquer — your imagination is the only limit.",
  },
];

export const Products = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < productsData.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="mx-10 mb-20 flex flex-col items-center justify-between gap-10 pt-16 md:mx-16 md:mb-30 md:px-20 lg:mx-20">
      <h2 className="text-gradient-primary text-2xl tracking-widest md:text-4xl">
        PRODUCTS
      </h2>

      <p className="text-md text-center md:text-lg">
        Buy our prebuilt products if you want to get started faster.
      </p>

      <div className="flex min-h-[400px] w-full flex-col items-start justify-between gap-10 md:flex-row md:gap-20">
        {/* Left image placeholder */}
        <div className="h-[300px] w-full rounded-4xl bg-linear-to-br from-neutral-950 via-neutral-900 to-neutral-800 md:h-[150px] md:w-[45%]" />

        {/* Right text content */}
        <div className="flex min-h-[400px] w-full flex-col items-center justify-center gap-6 md:w-[55%] md:items-end md:justify-end">
          <p className="text-md/3 text-justify">{productsData[index].text}</p>

          <button className="border-primary text-primary hover:bg-primary rounded-xl border-2 px-6 py-2 font-semibold transition-all duration-300 hover:scale-105 hover:text-black hover:shadow-[0_0_15px_var(--color-primary)]">
            Learn more
          </button>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="mt-4 flex flex-row items-center justify-between gap-8">
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className={`rounded-xl px-6 py-2 font-semibold transition-all duration-300 ${
            index === 0
              ? "cursor-not-allowed bg-gray-500 text-gray-200"
              : "bg-primary/80 hover:bg-primary text-black hover:scale-105 hover:shadow-[0_0_15px_var(--color-primary)]"
          }`}
        >
          {"<"}
        </button>

        <button
          onClick={handleNext}
          disabled={index === productsData.length - 1}
          className={`rounded-xl px-6 py-2 font-semibold transition-all duration-300 ${
            index === productsData.length - 1
              ? "cursor-not-allowed bg-gray-500 text-gray-200"
              : "bg-primary/80 hover:bg-primary text-black hover:scale-105 hover:shadow-[0_0_15px_var(--color-primary)]"
          }`}
        >
          {">"}
        </button>
      </div>
    </section>
  );
};
