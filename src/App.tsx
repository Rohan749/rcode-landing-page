import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Explore from "./components/Explore";
import Pricing from "./components/Pricing";
import LetsConnect from "./components/LetsConnect";
import Approach from "./components/Approach";

function App() {

  const lenis = new Lenis({
    autoRaf: true,

  });
  
  // Listen for the scroll event and log the event data
  // lenis.on('scroll', (e) => {
  //   console.log(e);
  // });

  return <>
    <div id="container-box" className=" overflow-x-hidden ">

      <Header />
      <Hero/>
      <About />
      <Explore />
      <Approach />
      <Pricing />
      <LetsConnect  />

    </div>
  </>;
}

export default App;
