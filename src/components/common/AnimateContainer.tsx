import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { ReactNode } from 'react'

interface AnimateInterface {
    children: ReactNode;
    classes: string;
}

const AnimateContainer = ({children, classes}:AnimateInterface) => {

    useGSAP(() => {
        gsap.fromTo("#animate-interface", 
            { 
              opacity: 0,
              y: 100,
              rotateX: 30,
              rotateY: 60
            },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              rotateY: 0,
              scrollTrigger: {
                trigger: "#animate-interface",
                start: "center 80%",
                scrub: true
              }
            })
    })

  return (
    <div className={`${classes}`}>
        {children}
    </div>
  )
}

export default AnimateContainer