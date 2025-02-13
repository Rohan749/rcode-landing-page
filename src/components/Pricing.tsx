import { useGSAP } from "@gsap/react";
import { packageContents } from "./constants";
import gsap from "gsap";
import Page from "./common/Page";
import PackageCard from "./common/PackageCard";

const Pricing = () => {

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#pricing",
                start: "top top",
                end: "+=500",
                pin: true,
                scrub: 1
            }
        })

        tl.fromTo(".price-container", {
          opacity: 0,
        }, {
          opacity: 1
        })

        tl.to("#pricing", {
            background: "rgb(224, 235, 255)",
            color: "black"
        })
        
        tl.fromTo(".price-box", 
          {
            opacity: 0,
            y: 20
          },
          {
            opacity: 1,
            y: 0
          })
    })

  return (
    <div id="pricing" className="p-1 lg:p-5 py-20 min-h-[100vh] black-theme bg-black">
      <div className=" h-full price-container ">
        <h1>OUR PRICING</h1>
        {/* <div className="pricename pt-10">
          <ul>
            <li>
              {packageContents.map((pkg, index) => {
                return <div className="pricing" key={index}>{pkg?.name}</div>;
              })}
            </li>
          </ul>
        </div> */}
          <Page>
      <div className='lg:pb-10 price-box'>
    
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full w-full py-10'>
        {packageContents.map((pkg, index) => {
          return <div className='w-full' key={pkg.designation}>
          <PackageCard classname={index===1 ? "black-theme" : ""} pkg={pkg} />
          </div>
        })}
      </div>
      </div>
    </Page>
      </div>
    </div>
  );
};

export default Pricing;
