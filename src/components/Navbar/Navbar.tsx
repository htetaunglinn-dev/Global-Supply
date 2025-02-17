import logo from "assets/global.svg";
import Drawer from "components/Drawer/Drawer";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="absolute z-50 top-0 right-0 lg:right-[5%] left-0 pl-5 pr-10 py-3 bg-white/20 backdrop:blur-lg select-none">
      <div className="flex justify-between items-center">
        <img src={logo} alt="company logo" className="w-20 " />

        <section className="flex items-center gap-3 text-black">
          <a
            href="https://wa.me/66804642352"
            className="hidden lg:inline-block"
          >
            +66 804642352
          </a>
          <a
            href="https://wa.me/66804642352"
            className="hidden lg:inline-block rounded border border-black/40 py-2 px-6 hover:bg-black/80 hover:text-white transition-all duration-300 ease-out"
          >
            Contact Us
          </a>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="border border-black/40 rounded-md p-1 hover:scale-105"
              aria-label="Menu Button"
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </section>
      </div>

      {/* Drawer */}
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className=" hidden lg:block">
        <ul className="flex gap-5 text-black font-semi-bold tracking-wide">
          <li>
            <a href="#" className="link">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Products and services
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Manufacturing process
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Research Development
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Case Study
            </a>
          </li>
          <li>
            <a href="#" className="link">
              News
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
