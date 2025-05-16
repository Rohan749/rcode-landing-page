import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Product Manager",
    feedback: "VisionarLabs delivered exactly what we needed – fast, sleek, and user-friendly. Amazing work!"
  },
  {
    name: "Marcus Lee",
    role: "Startup Founder",
    feedback: "They built the frontend so fast, I had time to relax for once. Super efficient team!"
  },
  {
    name: "Sophia Chen",
    role: "UX Designer",
    feedback: "Incredible eye for design and smooth animations. Felt like working with real artists!"
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll(".testimonial");
    if (!items) return;

    gsap.from(items, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });
  }, []);

  return (
    <section className="bg-black text-secondary py-16 px-6 md:px-20 z-[999999999] relative">
      <h2 className="text-3xl md:text-4xl font-bold text-tertiary mb-12 text-center">
        What Our Clients Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="testimonial bg-[#111] p-6 rounded-2xl shadow-xl border border-[#222]"
          >
            <p className="text-lg leading-relaxed mb-4">“{t.feedback}”</p>
            <div className="text-tertiary font-semibold">{t.name}</div>
            <div className="text-sm text-gray-400">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
