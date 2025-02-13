import { TbTruckDelivery } from "react-icons/tb";

import { BiGridAlt } from "react-icons/bi";
import { FaExpand } from "react-icons/fa";
import { AiOutlineAppstoreAdd, AiOutlineExpand, AiOutlineEye } from "react-icons/ai";

export const packageContents = [
  {
    designation: "Starter Spark",
    name: "STARTER",
    type: "Free",
    alert: "5 spots left for March.",
    features: [
      "Landing Page Development (If Figma File is Final Ready)",
      "Up to 5-6 Pages",
      "Delivery Within 4 Days (After Development Starts)",
      "Animations Included",
      "Fully Responsive & Optimized",
      "SEO-Ready Structure",
    ],
  },
  {
    designation: "Growth Ignite",
    name: "GROWTH",
    type: "$1,599 starts",
    alert: "Limited spots available.",
    features: [
      "Custom-Built Frontend Development",
      "Figma-Based Design Tailored to Your Needs",
      "Dashboard Wireframing & Basic Integrations",
      "7-9 Pages Delivered Within a Week",
      "Smooth Animations & Video Support",
      "Optimized Performance & SEO-Ready",
    ],
  },
  {
    designation: "Enterprise Elevate",
    name: "ENTERPRISE",
    type: "$2,699 starts",
    alert: "1 spot left for Feb.",
    features: [
      "Complete Frontend Development With Full Dashboard",
      "State Management & Admin Controls",
      "Authentication & Backend Integration Support",
      "Third-Party API & Payment Integrations",
      "Highly Scalable & Optimized for Performance",
      "Timelines Discussed Upfront",
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
