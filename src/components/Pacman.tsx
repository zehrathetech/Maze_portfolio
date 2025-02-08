import React, { useState, useEffect } from "react";
import { movePacman } from "../functions/gameLogic";
import { checkpoints } from "../data/checkpoints";
import "../styles/animations.css";

type PacmanProps = {
  onReachCheckpoint: (id: number) => void;
};

const Pacman: React.FC<PacmanProps> = ({ onReachCheckpoint }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      setPosition((prev) => {
        const newPosition = movePacman(event.key, prev);

        if (event.key === "ArrowUp") setDirection("up");
        if (event.key === "ArrowDown") setDirection("down");
        if (event.key === "ArrowLeft") setDirection("left");
        if (event.key === "ArrowRight") setDirection("right");

        // 🔥 Convert checkpoint coordinates from string to number
        checkpoints.forEach((cp) => {
          const cpX = Number(cp.x); // Convert x to number
          const cpY = Number(cp.y); // Convert y to number

          const distance = Math.sqrt(
            Math.pow(newPosition.x - cpX, 2) + Math.pow(newPosition.y - cpY, 2)
          );

          if (distance < 30) {
            onReachCheckpoint(cp.id);
          }
        });

        return newPosition;
      });
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onReachCheckpoint]);

  return (
    <svg
      className={`pacman pacman-${direction}`}
      style={{ left: position.x, top: position.y }}
      width="50"
      height="50"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="50" fill="yellow" />
      <polygon points="50,50 100,20 100,80" fill="black" />
    </svg>
  );
};

export default Pacman;
