import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode;
    classes?: String;
}

const Container = ({children, classes}:ContainerProps) => {

  useGSAP(() => {
    gsap.fromTo(".mask", 
      { 
        opacity: 0,
        y: 100,
        rotateX: 60,
        rotateY: 60
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        scrollTrigger: {
          trigger: ".mask",
          start: "center 100%",
          scrub: true
        }
      })
  })

  return (
    <div className={`mask p-5 container h-full w-full ${classes}`}>
        {children}
    </div>
  )
}

export default Container