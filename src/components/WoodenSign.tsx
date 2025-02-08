import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/WoodenSign.css";

const WoodenSign: React.FC = () => {
  const signRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (signRef.current) {
      // Drop-in animation
      gsap.fromTo(
        signRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "bounce.out" }
      );

      // Swing effect
      gsap.to(signRef.current, {
        keyframes: { rotate: [-5, 5, -5] }, // Swinging motion
        repeat: -1,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
      });
    }
  }, []);

  return (
    <div className="wooden-sign-container">
      <div className="rope"></div>
      <div className="wooden-sign" ref={signRef}>
        <div className="sign-text">Welcome to Zehra's Portfolio</div>
      </div>
    </div>
  );
};

export default WoodenSign;
