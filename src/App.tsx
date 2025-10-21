import Header from "@components/local/Header";
import BackgroundBlobs from "@components/local/BackgroundBlobs";
import { Hero } from "@components/local/Hero";
import { Divider } from "@components/local/Divider";

function App() {
  return (
    <div className="relative min-h-[2000px] w-full overflow-hidden bg-neutral-900 text-white">
      <BackgroundBlobs />
      <div className="z-50 flex w-full flex-col items-center pb-10">
        <Header />
        <div className="mt-20">
          <Hero />
        </div>
        <Divider />
      </div>
    </div>
  );
}

export default App;
