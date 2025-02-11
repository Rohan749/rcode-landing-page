import img1 from "../assets/images/img1.png"
import img2 from "../assets/images/img2.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import AniButton from './common/AniButton'
import AnimationTitle from './common/AnimationTitle'

const LetsConnect = () => {

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "center 80%",
        end:"center center",
        scrub: true
      }
    })

    tl.fromTo(".footer", 
      { 
        opacity: 0,
        y: 50,
        rotateX: 30,
        rotateY: 30,
        width: '0',
        xPercent: '50%'
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        width: "100%",
        scrollTrigger: {
          trigger: ".footer",
          start: "top bottom",
          end:"center 80%",
          scrub: true
        }
      })

      tl.fromTo(".para", {
        opacity: 0,
        y: 50
      }, 
    {
      opacity: 1,
      y: 0,
      delay: 0.4
    })

    tl.fromTo([".imglft", ".imgrght"], {
      y: -45,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    })
    

  })

  return (
    <div className='p-20 flex items-center justify-center text-center min-h-[110vh] relative'>
        <div className=' lg:w-[80vw]  lg:h-[70vh]  rounded-xl flex flex-col items-center justify-center relative'>
          <div className='lg:h-[75vh] h-[85vh] max-h-[40rem] w-[100%] lg:w-[80vw] absolute bg-black footer z-30 left-1/2 -translate-x-1/2 rounded-xs' />
      <img src={img1} alt='' className= 'imglft hidden lg:block absolute z-50 left-[-4rem] bottom-0 h-[20rem] ' />
      <img src={img2} alt='' className='imgrght hidden lg:block absolute z-50 right-[-4rem] bottom-0 h-[30rem]' />
          <AnimationTitle title={"READY TO <br/> GET STARTED?"}  target={"footer-connect"}
          classVals={"font-bold text-center text-white z-50"} />
          <div className='lg:w-[34rem] para z-50 py-8'>Get started on launching your idea. Let's connect to understand your vision and scale your product to new heights!</div>
          <div className='z-50'>
            <AniButton classname='z-50 para'>CONTACT US</AniButton>
          </div>

        </div>
    </div>
  )
}

export default LetsConnect