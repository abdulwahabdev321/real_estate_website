"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
  { number: 500, suffix: "+", label: "Properties Sold" },
  { number: 1200, suffix: "+", label: "Happy Clients" },
  { number: 15, suffix: "+", label: "Years Experience" },
  { number: 98, suffix: "%", label: "Client Satisfaction" },
];

function AnimatedNumber({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span ref={ref} className="stat-number">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection({ dark = false }) {
  return (
    <section className={`py-16  ${dark ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center md:p-6  font  opacity-0 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <AnimatedNumber target={stat.number} suffix={stat.suffix} />
              <p className={`mt-2 font-medium ${dark ? "text-gray-400" : "text-gray-600"}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
