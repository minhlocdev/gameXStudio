interface ClientFeedback {
  name: string;
  feedback: string;
  role: string;
  avatar?: string; // optional avatar URL
}

type Props = { clientFeedback: ClientFeedback };

export const ClientFeedbackCard = ({ clientFeedback }: Props) => {
  return (
    <div className="relative flex h-full max-h-[300px] w-full flex-col justify-end rounded-2xl bg-linear-to-b from-neutral-800 to-neutral-950 p-8 pt-14 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_var(--color-primary)]">
      <div className="absolute -top-10 left-1/2 z-10 h-20 w-20 -translate-x-1/2 overflow-hidden rounded-full border-4 border-neutral-900 bg-neutral-700">
        <img
          src={clientFeedback.avatar || "/default-avatar.png"}
          alt={clientFeedback.name}
          className="h-full w-full object-cover"
        />
      </div>

      <p className="text-sm md:text-md text-center italic">“{clientFeedback.feedback}”</p>
      <h3 className="mt-6 text-center text-lg md:text-xl font-semibold">
        {clientFeedback.name}
      </h3>
      <p className="mt-3 text-center text-sm/2 md:text-sm opacity-70">{clientFeedback.role}</p>
    </div>
  );
};
