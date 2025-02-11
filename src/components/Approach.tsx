
import { useGSAP } from "@gsap/react";
import AnimationTitle from "./common/AnimationTitle";
import { approach } from "./constants";
import gsap from "gsap";
import { useRef } from "react";



const Approach = () => {

  const ref = useRef(null)

  useGSAP(() => {
   const elements = gsap.utils.toArray(".approachval");

   gsap.from(elements, {
    opacity: 0,
    y: 50,
    stagger: 0.3, // Delay between elements
    duration: 1,
    scrollTrigger: {
      trigger: ref.current,
      start: "top 80%", // Each element animates when it reaches 80% of viewport
      end: "top 30%", // Animation completes when element reaches 30%
       toggleActions: "play none none reverse"
    },
  });
  
  })

  return (
    <section ref={ref} className="black-theme p-1 lg:p-5 py-20">
      <div>
        <AnimationTitle
          title={"OUR APPROACH"}
          target={"approach"}
          classVals={"font-bold text-center text-white"}
        />
        <div className="grid lg:grid-cols-2 gap-5">
          <div>
            {approach.map((val, index) => {
              return (
                <div className={`approachval py-20`} key={index}>
                  <h2>{val.title}</h2>
                  <p className="text-slate-300 pt-5">{val.description}</p>
                </div>
              );
            })}
          </div>
          <div>
          <div className="w-full h-screen">
     
    </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
