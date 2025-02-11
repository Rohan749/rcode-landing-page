import { ReactNode } from 'react'

interface pageProps {
  children: ReactNode
}

const Page = ({children}:pageProps) => {
  return (
    <>
    <section className='lg:px-10 md:p-5 p-2 rounded-xl pb-[6rem] flex justify-center'>
      <div className='max-w-[75rem]'>
      {children}
      </div>
    </section>
    </>
  )
}

export default Page