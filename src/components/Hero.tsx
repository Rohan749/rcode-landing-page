import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AniButton from "./common/AniButton";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".herobg",
      {
        clipPath: "polygon( 0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(14% 0%, 72% 0%, 80% 90%, 5% 70%)",
        scrollTrigger: {
          trigger: ".herobg",
          start: "center center",
          end: "+500",
          scrub: 0.01,
        },
      }
    );

  });

  return (
    <div className="bg-black herobg lg:bg-transparent">
      {/* <section id="hero"> */}
      <div className="hero h-[100vh] flex justify-center lg:px-5 mb-10" />
      <div className=" w-full  flex flex-col justify-between pt-[4rem] ">
        <div className=" absolute z-50 left-1 top-16 lg:top-10 lg:left-5 blend flex flex-col gap-2">
          <div className="left-0 title text-[#E0EBFF]">ELEVATING</div>
          <p className="mt-[-1rem] lg:mt-[-2rem] text-sm">Crafting Interfaces <br/> That Perform</p>
          <div>
            <a href="#about">
          <AniButton>GET STARTED</AniButton>
          </a>
          </div>
        </div>
      </div>
      <div className="text-right blend absolute bottom-0 z-50 right-1 lg:right-5">
        <div className="right-0 blend title text-[#E0EBFF]">FRONTEND</div>
      </div>
      {/* </section> */}
    </div>
  );
};

export default Hero;
