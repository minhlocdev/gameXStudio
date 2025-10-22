import type React from "react";
import { ClientFeedbackCard } from "../ui/ClientFeedbackCard";
import Slider, { type Settings } from "react-slick";

interface ClientFeedback {
  name: string;
  feedback: string;
  role: string;
}

const clientFeedbacksData: ClientFeedback[] = [
  {
    name: "John Doe",
    feedback:
      "I am extremely satisfied with the team's outstanding work in 3D game development...",
    role: "Game Developer at XYZ Studios",
  },
  {
    name: "Alice Smith",
    feedback:
      "They delivered excellent results on time and exceeded our expectations.",
    role: "Product Manager at MetaPlay",
  },
  {
    name: "Alice Smith",
    feedback:
      "They delivered excellent results on time and exceeded our expectations.",
    role: "Product Manager at MetaPlay",
  },
  {
    name: "Alice Smith",
    feedback:
      "They delivered excellent results on time and exceeded our expectations.",
    role: "Product Manager at MetaPlay",
  },
];

// Custom arrow components
const NextArrow = (props: React.ComponentProps<"button">) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="bg-primary/80 hover:bg-primary absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full px-4 py-2 font-bold text-black shadow-lg transition-all hover:scale-105 hover:shadow-[0_0_15px_var(--color-primary)]"
    >
      {">"}
    </button>
  );
};

const PrevArrow = (props: React.ComponentProps<"button">) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="bg-primary/80 hover:bg-primary absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full px-4 py-2 font-bold text-black shadow-lg transition-all hover:scale-105 hover:shadow-[0_0_15px_var(--color-primary)]"
    >
      {"<"}
    </button>
  );
};

export const Clients = () => {
  const settings: Settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerPadding: "400px",
    draggable: true,
    swipe: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="relative -mx-[calc((100vw-100%)/2)] mb-10 w-screen max-w-none pt-16">
      <h2 className="text-gradient-primary mb-4 text-center text-3xl tracking-widest md:text-4xl">
        CLIENTS
      </h2>
      <p className="text-md mb-10 text-center md:text-lg">
        See what our clients say about us.
      </p>

      <Slider {...settings}>
        {clientFeedbacksData.map((client, index) => (
          <div key={index} className="h-[500px] pt-20 px-10" >
            <ClientFeedbackCard clientFeedback={client} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Clients;
