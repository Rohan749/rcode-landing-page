"use client"

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useScroll, useTransform, motion } from "motion/react";
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import More from "./components/More";
import Explore from "./components/Explore";
import OurApproach from "./components/OurApproach";
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
