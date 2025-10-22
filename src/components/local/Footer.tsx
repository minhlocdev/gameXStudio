import { Facebook, Mail, X } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full px-6 py-12 text-neutral-300 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-start gap-10 md:flex-row md:gap-20">
          <div className="">
            <h2 className="text-3xl font-bold text-white">
              <span className="text-yellow-400">Game</span>
              <span className="text-white">X</span>
              <span className="text-yellow-400">studio</span>
            </h2>

            <p className="mt-4 text-2xl leading-snug font-semibold text-white">
              Turn your idea <br />
              into real <span className="text-yellow-400">exciting games</span>
            </p>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-400">
              3rd Floor, SBI Building, Quang Trung Software Park, Tan Chanh Hiep
              Ward, District 12, Ho Chi Minh City, Vietnam
            </p>

            <p className="mt-2 text-sm text-neutral-400">(+84) 28 371 575 62</p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-1 justify-around gap-10">
            <div>
              <h4 className="mb-3 font-semibold text-white">About us</h4>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer hover:text-yellow-400">
                  Partners
                </li>
                <li className="cursor-pointer hover:text-yellow-400">
                  Privacy Policy
                </li>
                <li className="cursor-pointer hover:text-yellow-400">
                  Terms & Conditions
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-white">Supports</h4>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer hover:text-yellow-400">FAQ</li>
                <li className="cursor-pointer hover:text-yellow-400">
                  Help & Support
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-neutral-800"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 transition-all hover:bg-yellow-400 hover:text-black"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 transition-all hover:bg-yellow-400 hover:text-black"
            >
              <Mail />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 transition-all hover:bg-yellow-400 hover:text-black"
            >
              <X />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs text-neutral-500 md:text-right">
            Copyright © GameXStudio 2016–2024. An EBIZWORLD’s Studio.
          </p>
        </div>
      </div>
    </footer>
  );
};
