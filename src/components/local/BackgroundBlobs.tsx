interface Blob {
  color: string;
  size: string;
  position: string;
  duration: string;
  opacity: string;
}

const blobs: Blob[] = [
  {
    color: "bg-primary/90 blur-[300px]",
    size: "w-[400px] h-[300px]",
    position: "top-[-200px] left-[500px]",
    duration: "",
    opacity: "opacity-40",
  },
  {
    color: "bg-primary/90 blur-[300px]",
    size: "w-[300px] h-[500px]",
    position: "bottom-[80vh] right-[-200px]",
    duration: "animate-glow-and-fade",
    opacity: "opacity-30",
  },
  {
    color: "bg-primary/90 blur-[300px]",
    size: "w-[300px] h-[500px]",
    position: "bottom-[30vh] left-[-200px]",
    duration: "animate-glow-and-fade",
    opacity: "opacity-30",
  },
  {
    color: "bg-primary/90 blur-[300px]",
    size: "w-[300px] h-[500px]",
    position: "bottom-[10vh] right-[50%]",
    duration: "",
    opacity: "opacity-30",
  },
];

const BackgroundBlobs: React.FC = () => {
  return (
    <div className="inset-0 z-10 overflow-hidden bg-neutral-900">
      {blobs.map((blob, index) => (
        <div
          key={index}
          className={`absolute z-0! rounded-full bg-linear-to-r mix-blend-screen blur-3xl ${blob.color} ${blob.size} ${blob.position} ${blob.duration} ${blob.opacity} `}
        />
      ))}
    </div>
  );
};

export default BackgroundBlobs;
