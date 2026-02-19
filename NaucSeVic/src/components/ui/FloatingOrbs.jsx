import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FloatingOrbs = ({ count = 6, colors = ["indigo", "purple", "pink"] }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const orbs = containerRef.current.querySelectorAll(".floating-orb");

    orbs.forEach((orb, index) => {
      // Random starting position
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;

      gsap.set(orb, {
        x: `${startX}%`,
        y: `${startY}%`,
      });

      // Create floating animation
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(orb, {
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        duration: 10 + Math.random() * 10,
        ease: "sine.inOut",
        delay: index * 0.5,
      });

      // Pulse animation
      gsap.to(orb, {
        scale: 1.2,
        opacity: 0.8,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  const colorMap = {
    indigo: "bg-indigo-600/20",
    purple: "bg-purple-600/20",
    pink: "bg-pink-600/20",
    blue: "bg-indigo-600/20",
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {Array.from({ length: count }).map((_, index) => {
        const color = colors[index % colors.length];
        return (
          <div
            key={index}
            className={`floating-orb absolute w-32 h-32 md:w-64 md:h-64 rounded-full blur-3xl ${colorMap[color]}`}
            style={{ opacity: 0.4 }}
          />
        );
      })}
    </div>
  );
};

export default FloatingOrbs;
