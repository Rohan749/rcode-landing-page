import React from 'react'
import Container from './common/Container'
import { features } from './constants'
import AnimationTitle from './common/AnimationTitle'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Explore = () => {

  useGSAP(() => {
    gsap.fromTo(".paragraph", {
      opacity: 0,
      y: 20
    },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".paragraph",
        start: "top 90%",
        end: 'top center',
        scrub: 2
      }
    }
  )
  })

  
  return (
    <section>
    <div className='p-1 py-20 lg:px-5 black-theme min-h-[100vh] lg:mt-0 '>
      <AnimationTitle title={"LET'S BUILD YOUR <br/> VISION"} target={"vision"} classVals={"font-bold text-center text-white"} /> 
        <p className='text-center pt-10 paragraph'>We transform your ideas into stunning, high-performance frontends with sleek designs, seamless functionality, and rapid development.</p>
        <div className='lg:pt-10'>
        
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          {features.map((feature, index) => (
            <div key={index}>
            <Container>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </Container>
          </div>
          ))}
          </div>
       
        </div>
    </div>
    </section>
  )
}

export default Explore