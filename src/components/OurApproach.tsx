import React from 'react'
import Container from './common/Container'

const OurApproach = () => {
  return (
    <section className='lg:px-10 md:p-5 p-2 rounded-xl pb-[6rem] flex justify-center'>
    <div className='p-30 light-theme min-h-[100vh]'>
    <h2>Explore the Zentry Universe
    </h2>
    <p className='w-[25rem]'>Immerse yourself in an IP-rich product universe where AI-driven gamification and hyper-personalization lead humans & AI into a global play economy.</p>
    <div className='pt-10'>
      <div className='mb-10 grid grid-cols-1'>
      <Container>
        <h2>Pixel-perfect Frontend</h2>
        <p>We transform designs into sleek, responsive, and high-performance web interfaces.</p>
      </Container>
      </div>

      <div className='grid grid-cols-2 gap-10'>
      <Container >
        <h2>Pixel-perfect Frontend</h2>
        <p>We transform designs into sleek, responsive, and high-performance web interfaces.</p>
      </Container>
      <Container>
        <h2>Pixel-perfect Frontend</h2>
        <p>We transform designs into sleek, responsive, and high-performance web interfaces.</p>
      </Container>
      <Container>
        <h2>Pixel-perfect Frontend</h2>
        <p>We transform designs into sleek, responsive, and high-performance web interfaces.</p>
      </Container>
      <Container>
        <h2>Pixel-perfect Frontend</h2>
        <p>We transform designs into sleek, responsive, and high-performance web interfaces.</p>
      </Container>
      </div>
      <div className='grid grid-cols-1 mt-10'>
      <Container>
        <h2>Pixel-perfect Frontend</h2>
        <p>We transform designs into sleek, responsive, and high-performance web interfaces.</p>
      </Container>
      </div>
    </div>
</div>
</section>
  )
}

export default OurApproach