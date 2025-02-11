import { useRef } from 'react'
import AniButton from './common/AniButton'
import Lenis from 'lenis'
import gsap from 'gsap'

const Header = () => {
  
    const navRef = useRef(null)

    const lenis = new Lenis({
      autoRaf: true,
    })

    lenis.on('scroll', (e) => {
      console.log("Reff")
        gsap.to(navRef.current, {
          y: e.direction === 1 ? -100 : 0,
          duration: 0.4,
          delay: 0.1
      })
    })

   

  return (
    <header ref={navRef} className='fixed w-[100%] z-50 blend px-2 py-5 lg:p-5 flex items-center justify-between text-xs bg-black backdrop-blur-sm'>
        <div className='flex items-center gap-4'>
        <div className='font-bold'>RCODE</div>
        </div>
        <div className='flex items-center gap-5'>
            <a href='https://x.com/heyrohan7' target='_blank'>X</a>
            <a href='https://www.youtube.com/@rcode34' target='_blank'>YOUTUBE</a>
            <AniButton>BOOK A CALL</AniButton>
        </div>
    </header>
  )
}

export default Header