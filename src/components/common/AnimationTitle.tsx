import gsap from "gsap";
import  { useEffect, useRef } from "react";

interface TitleInterface {
  title: String;
  classVals: String;
  target: String
}

const AnimationTitle = ({ title, classVals, target }: TitleInterface) => {
  const ref = useRef(null);

  // useGSAP(() => {
  //   gsap.fromTo(
  //     `.${target}`,
  //     {
  //       opacity: 0,
  //       // y: 10,
  //     },
  //     {
  //       opacity: 1,
  //       stagger: 0.09,
  //       scrollTrigger: {
  //         trigger:  `.${target}`,
  //         scrub: 1,
  //         start: "top bottom",
  //         end: "top top",
  //       },
  //     }
  //   );
  // });


  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 3,
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
    }, ref);

    return () => ctx.revert();
  }, []);


  return (
    <div ref={ref}
      className={`animated-title font-extrabold antonio ${classVals}`}
    >
      {title.split("<br/>").map((line, index) => {
        return (
          <div
            key={index}
            className={`flex flex-center justify-center max-w-full flex-wrap px-10 ${classVals}`}
          >
            {line.split(" ").map((word, i) => {
              return (
                <span ref={ref}
                  key={i}
                  className={`animated-word text-center bigshoulder ${target}`}
                  dangerouslySetInnerHTML={{ __html: word }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default AnimationTitle;
