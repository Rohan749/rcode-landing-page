import { ReactNode } from 'react'
import {motion} from "motion/react"

interface buttonInterface {
    children: ReactNode;
    classname?: string;
}

const AniButton = ({children, classname, ...otherProps}:buttonInterface) => {
  return (
    <button {...otherProps} className={`bg-transparent text-white px-2 relative min-w-[5rem]  overflow-y-hidden h-[1.5rem] text-xs uppercase ${classname}`} >
        <motion.div className='text-md h-[4rem] flex flex-col gap-3' initial={{y: '-0.5rem'}} whileHover={{y: '-2.2rem'}}>
        <div>{children}</div>
        <div>{children}</div>
        </motion.div>
    </button>
  )
}

export default AniButton