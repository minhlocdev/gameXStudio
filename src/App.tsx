import Header from "@components/local/Header";
import BackgroundBlobs from "@components/local/BackgroundBlobs";
import { Hero } from "@components/local/Hero";
import { Divider } from "@components/local/Divider";
import { About } from "@components/local/About";
import { Partners } from "@components/local/Partners";
import { Products } from "@components/local/Products";
import { Projects } from "@components/local/Projects";
import { Clients } from "@components/local/Clients";
import { Footer } from "@components/local/Footer";

function App() {
  return (
    <div className="relative min-h-[2000px] w-full overflow-hidden bg-neutral-950 text-white">
      <BackgroundBlobs />
      <div className="z-50 flex w-full flex-col items-center pb-10">
        <Header />
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Products />
        <Divider />
        <Projects />
        <Divider />
        <Clients />
        <Divider />
        <Partners />
        <Divider />
        <Footer />
      </div>
    </div>
  );
}

export default App;
