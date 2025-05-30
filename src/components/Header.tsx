import { useRef } from "react";
import AniButton from "./common/AniButton";
import Lenis from "lenis";
import gsap from "gsap";
import { BsYoutube } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";



const Header = () => {
  const navRef = useRef(null);

  const lenis = new Lenis({
    autoRaf: true,
  });

  lenis.on("scroll", (e) => {
    console.log("Reff");
    gsap.to(navRef.current, {
      y: e.direction === 1 ? -100 : 0,
      duration: 0.4,
      delay: 0.1,
    });
  });

  return (
    <header
      ref={navRef}
      className="fixed w-[100%] z-50 blend px-2 py-5 lg:p-5 flex items-center justify-between text-xs bg-black backdrop-blur-sm"
    >
      <div className="flex items-center gap-4">
        <div className="font-bold">ROHAN KUMAR PANDEY</div>
      </div>
      <div className="flex items-center gap-8 font-bold">
      <a href="https://github.com/Rohan749" target="_blank"  className="flex items-center gap-1"
        >
          <span>
            <IoLogoGithub className="w-5 h-full" />
          </span>

          <span className="">GITHUB</span>
        </a>
        <a href="https://x.com/heyrohan7" target="_blank"  className="flex items-center gap-1"
        >
          <span>
            <FaXTwitter className="w-5 h-full" />
          </span>

          <span className="">X</span>
        </a>
        <a
          href="https://www.youtube.com/@rcode34"
          target="_blank"
          className="flex items-center gap-1"
        >
          <span>
            <BsYoutube className="w-6 h-full text-[#FF0132]" />
          </span>
          <span className="">YOUTUBE</span>
        </a>
        <a target="_blank" href={"https://cal.com/rohan-uqvxp0/30min"}>
          <AniButton>BOOK A CALL</AniButton>
        </a>
      </div>
    </header>
  );
};

export default Header;
