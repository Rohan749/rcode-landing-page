import "lenis/dist/lenis.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Explore from "./components/Explore";
import Pricing from "./components/Pricing";
import LetsConnect from "./components/LetsConnect";
import Approach from "./components/Approach";

function App() {
  return (
    <>
      <div id="container-box" className=" overflow-x-hidden ">
        <Header />
        <Hero />
        <About />
        <Explore />
        <Approach />

        {/* <Testimonials /> */}
        <Pricing />
        <LetsConnect />
      </div>
    </>
  );
}

export default App;
