import { useEffect } from "react";

export const FinisherHeader = () => {
  useEffect(() => {
    // Confirm script is loaded
    if (window.FinisherHeader && !window.finisherInitialized) {
      new window.FinisherHeader({
        selector: ".finisher-header",
        count: 100,
        size: { min: 2, max: 8, pulse: 0 },
        speed: {
          x: { min: 0, max: 0.4 },
          y: { min: 0, max: 0.6 },
        },
        colors: {
          background: "#0f172a",
          particles: ["#2a32e4", "#e5f5fb", "#a94cce"],
        },
        blending: "overlay",
        opacity: { center: 1, edge: 0 },
        skew: -2,
        shapes: ["s"],
      });

      window.finisherInitialized = true;
    }
  }, []);

  return (
    <div
      className="finisher-header"
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none", 
      }}
    />
  );
};
