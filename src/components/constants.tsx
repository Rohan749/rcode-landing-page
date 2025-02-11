import { TbTruckDelivery } from "react-icons/tb";

import { BiGridAlt } from "react-icons/bi";
import { FaExpand } from "react-icons/fa";
import roadmap from "../assets/images/roadmap.png";
import development from "../assets/images/development.png";
import launch from "../assets/images/launch.png";
import support from "../assets/images/support.png";
import { AiOutlineAppstoreAdd, AiOutlineExpand, AiOutlineEye } from "react-icons/ai";
export const packageContents = [
  {
    designation: "Starter Spark",
    name: "STARTER",
    type: "Free",
    alert: "5 spots left for march.",
    features: [
      "Landing Page Development (If Figma File is Final Ready)",
      "Up to 5-6 Pages",
      "Delivery Within 5 Days (After Development Starts)",
      "2D Animation Included",
      "Fully Responsive & Optimized",
      "SEO-Ready Structure",
    ],
  },
  {
    designation: "Landing Launch",
    name: "LANDING PLUS",
    type: "$499 starts",
    alert: "3 spots left for march.",
    features: [
      "All Starter Features Included",
      "Fully Figma Based Design (Tailored to Your Needs)",
      "Up to 6-7 Pages",
      "Delivery in 6 Days (After Development Starts)",
      "2D Animation + Videos Can be Included",
    ],
  },
  {
    designation: "Premium Pulse",
    name: "PREMIUM PLUS",
    type: "$799 starts",
    alert: "1 spot left for march.",
    features: [
      "Unique Landing Page With High-Quality Design",
      "Includes Smooth Animations",
      "Contains 7–9 Pages Delivered Within a Week",
      "2D Animation + Videos Can be Included"
    ],
  },
  {
    designation: "Dashboard Draft",
    name: "DASHBOARD WIREFRAME",
    type: "$999 starts",
    alert: "1 spot left for march.",
    features: [
      "Dashboard Concept Created Using Figma Wireframes",
      "Comprises 5–8 Sections",
      "Includes Backend Integration Planning",
      "Timelines Discussed Upfront"
    ],
  },
  {
    designation: "Custom Forge",
    name: "CUSTOM DASHBOARD",
    type: "$1699",
    alert: "1 spot left for march.",
    features: [
      "All Features of Dashboard Wireframe Included",
      "Custom Dashboard Developed With/Without Figma Designs",
      "Focus on Wireframe-Based Layout With Optimized Performance",
      "State Management And Admin Controls",
      "Complete FE Integration+Authentication",
      "Timelines Discussed Upfront",
    ],
  },
  {
    designation: "Enterprise Elevate",
    name: "ENTERPRICE DASHBOARD",
    type: "$2699",
    alert: "1 spot left for march.",
    features: [
      "Features of Custom Dashboard Package",
      "Enhanced With Additional Third-Party Integrations",
      "Tailored For Comprehensive And Scalable Dashboard Solutions",
      "Timelines Discussed Upfront"
    ],
  },
];

export const founderIntro = `I’m Rohan, the founder of VisionaryLabs. I’m a full-stack developer with years of experience building user-friendly websites and applications. I’ve worked on a wide range of projects, helping businesses create modern, fast, and scalable solutions.My goal is to understand your needs and use my skills to deliver the best possible results for your business. Whether it’s designing a sleek interface or developing a powerful backend, I’m here to help turn your ideas into reality and ensure your success.`;

export const features = [
  {
    logo: <BiGridAlt size={70}/>,
    title: "PIXEL PERFECT FRONTEND",
    description:
      "We transform designs into sleek, responsive, and high-performance web interfaces.",
  },
  {logo: <TbTruckDelivery size={70}/>,
    title: "LIGHTNING-FAST DELIVERY",
    description:
      "Get your full-fledged frontend built within days, not weeks.",
  },
  {logo: <FaExpand size={70}/>,
    title: "CODE THAT SCALES",
    description:
      "We use modern, scalable, and maintainable tech stacks to future-proof your frontend.",
  },
  {logo: <AiOutlineAppstoreAdd size={70}/>,
    title: "SEAMLESS INTEGRATIONS",
    description:
      "Whether it's APIs, CMS, or third-party tools, we ensure smooth connections.",
  },
  {logo: <AiOutlineEye size={70}/>,
    title: "TRANSPARENT AND HASSLE-FREE",
    description: "No fluff, just clear communication and dedicated execution.",
  },
  {logo: <AiOutlineExpand size={70}/>,
    title: "FLEXIBLE PLANS FOR EVERYONE",
    description:
      "From free landing pages to custom web solutions, we’ve got you covered.",
  },
];


export const approach = [
  {
    title: "INITIAL CONSULTATION",
    description: "Share your vision in a free call to align goals and needs.",
  },
  {
    title: "PLANNING",
    description: "We craft a clear plan outlining what and how we’ll build.",
  },
  {
    title: "DEVELOPEPMENT",
    description: "Once approved, we build and provide regular updates.",
  },
  {
    title: "WEBSITE LAUNCH",
    description: "Receive a fully functional website, ready for launch.",
  },
  {
    title: "ONGOING SUPPORT",
    description: "Enjoy 4 weeks of free maintenance and updates.",
  },
];
