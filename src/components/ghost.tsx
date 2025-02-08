import React from "react";
import "../styles/ghost.css";

interface GhostProps {
  row: number;
  col: number;
  isBlinking: boolean;
  color: string;
}

const Ghost: React.FC<GhostProps> = ({ row, col, isBlinking, color }) => {
  return (
    <div
      className={`ghost ${isBlinking ? "blink" : ""}`}
      style={{
        top: `${row * 40}px`,
        left: `${col * 40}px`,
        color: color, // Change ghost color when reaching checkpoint
      }}
    >
      👻
    </div>
  );
};

export default Ghost;
