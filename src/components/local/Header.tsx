import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const THRESHOLD = 10;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "bg-neutral-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex h-[80px] max-h-[80px] items-center justify-center py-4 md:justify-between lg:px-12">
        <div className="flex h-full w-full justify-center p-2 md:w-48">
          <img
            src="/Logo.png"
            alt="GameXStudio Logo"
            className="h-full w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex">
          <ul className="text-neutral-100">
            {[
              "Home",
              "About",
              "Products",
              "Projects",
              "Clients",
              "Partners",
              "Contact",
            ].map((item) => (
              <li
                key={item}
                className="group relative inline-block cursor-pointer px-2 py-2 text-white transition-colors duration-200 hover:drop-shadow-[2px_-4px_6px_rgba(255,255,255,0.8)] md:px-4"
              >
                <span className="absolute bottom-0 left-0 h-[3px] w-0 rounded-full bg-linear-to-r from-[#E17D02] via-[#FBC822] to-[#E17D02] transition-all duration-500 ease-out group-hover:w-full group-hover:shadow-[0_2px_8px_2px_rgba(255,203,17,0.6)]"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
