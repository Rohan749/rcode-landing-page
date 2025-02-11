import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimationTitle from "./common/AnimationTitle";
import AniButton from "./common/AniButton";

const About = () => {



  useGSAP(() => {
    gsap.fromTo(
      ".mask-clip-path",
      {
        opacity: 0,
        y: 100,
        rotateX: 30,
        rotateY: 60,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        scrollTrigger: {
          trigger: ".mask-clip-path",
          start: "center 80%",
          scrub: true,
        },
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center 50%",
        end: "+=810",
        pin: true,
        scrub: 0.01,
      },
    });

    tl.to(".mask-clip-path", {
      width: "115vw",
      height: "125vh",
      borderRadius: 0,
      marginTop: "-5rem",
      // scale: 0.9,
      top: -5,
      left: "50%"
    });

    tl.to(".mask-clip-path", {
      background: 'black'
    })

    tl.fromTo(".mask-container", 
      {
        opacity: 0,
        y: 20
      }, 
      {
        opacity: 1,
        y: 0,
        stagger: 1
      })
      tl.to(".mask-container", 
        {
          opacity: 0,
          y: 25
        }, 
        )
  });

  return (
    <section>
      <div className="h-[235vh] 2xl:h-[210vh] w-full p-1 lg:p-5  text-black relative flex flex-col overflow-hidden mt-10">
        <AnimationTitle
          title={"WE CRAFT FRONTENDS<br/>THAT INSPIRE"}
          target={"about"}
          classVals={"font-bold text-center text-black"}
        />
        <div className="h-dvh w-full relative" id="clip">
          <div className="mask-clip-path about-image text-center outline-dashed text-white">
            <div className="mask-container gap-3 outline-dashed w-full h-full flex flex-col items-center justify-center">
              <h1>RCODE</h1>
              <p className="w-[18rem]">Transform the way you experience your website.</p>
              <AniButton>BOOK A CALL</AniButton>
            </div>
          </div>
          <div className=" absolute top-100 flex justify-center w-full">
            <div className="lg:text-center text-justify lg:w-[35rem]">
              <p className="text-center">Elevating Frontend Experiences Effortlessly!</p>
              <p className="text-gray-500">
                RCode specializes in crafting high-quality, scalable frontend
                solutions, delivering sleek designs, seamless integrations, and
                rapid development for businesses worldwide. 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
