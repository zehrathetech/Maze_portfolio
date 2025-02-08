import React, { useState, useEffect, useCallback } from "react";
import Lottie from "lottie-react";
import { Dialog, DialogTitle, DialogContent, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import pandaAnimation from "../assets/animation/panda.json";  // Panda animation
import moveMusic from "../assets/sounds/move.mp3";  // Background music
import { mazeData, startRow, startCol, endRow, endCol, checkpoints } from "../mapData/mazeData";
import "../styles/Maze.css";

const ghosts = [
  { row: 2, col: 4, color: "red" },
  { row: 5, col: 6, color: "blue" },
  { row: 8, col: 2, color: "green" }
];

const Maze: React.FC = () => {
  const [playerPos, setPlayerPos] = useState({ row: startRow, col: startCol });
  const [showStart, setShowStart] = useState(true);
  const [showEnd, setShowEnd] = useState(false);
  const [activeCheckpoint, setActiveCheckpoint] = useState<typeof checkpoints[0] | null>(null);
  const [ghostPositions, setGhostPositions] = useState(ghosts);
  const [audio] = useState(new Audio(moveMusic));

  // Play background music in loop at low volume
  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.1;  // Set volume low
    audio.play().catch((err) => console.log("Audio play error:", err));

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  // Function to move ghosts randomly
  useEffect(() => {
    const interval = setInterval(() => {
      setGhostPositions((prevGhosts) =>
        prevGhosts.map((ghost) => {
          const directions = [
            { dRow: -1, dCol: 0 },
            { dRow: 1, dCol: 0 },
            { dRow: 0, dCol: -1 },
            { dRow: 0, dCol: 1 }
          ];

          const randomMove = directions[Math.floor(Math.random() * directions.length)];
          const newRow = ghost.row + randomMove.dRow;
          const newCol = ghost.col + randomMove.dCol;

          return mazeData[newRow]?.[newCol] === 0 ? { ...ghost, row: newRow, col: newCol } : ghost;
        })
      );
    }, 1000); // Move every second

    return () => clearInterval(interval);
  }, []);

  // Player Movement
  const handleMove = useCallback((e: KeyboardEvent) => {
    if (!showStart) {
      const moves: Record<string, [number, number]> = {
        ArrowUp: [-1, 0],
        ArrowDown: [1, 0],
        ArrowLeft: [0, -1],
        ArrowRight: [0, 1]
      };

      const [dRow, dCol] = moves[e.key] || [0, 0];
      const newRow = playerPos.row + dRow;
      const newCol = playerPos.col + dCol;

      if (mazeData[newRow]?.[newCol] === 0) {
        setPlayerPos({ row: newRow, col: newCol });

        const checkpoint = checkpoints.find(cp => cp.row === newRow && cp.col === newCol);
        if (checkpoint) setActiveCheckpoint(checkpoint);

        if (newRow === endRow && newCol === endCol) setShowEnd(true);
      }
    }
  }, [playerPos, showStart]);

  useEffect(() => {
    window.addEventListener("keydown", handleMove);
    return () => window.removeEventListener("keydown", handleMove);
  }, [handleMove]);

  return (
    <div className="maze-container">
      {/* Start Screen */}
<Dialog open={showStart} onClose={() => setShowStart(false)}>
  <DialogTitle>
    <span style={{ fontSize: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
      🐼 Portfolio Maze Adventure
    </span>
  </DialogTitle>
  <DialogContent style={{ textAlign: "center" }}>
    <p style={{ fontSize: "18px", fontWeight: "bold" }}>
      Use arrow keys <span style={{ fontSize: "20px" }}>⬆️ ⬇️ ⬅️ ➡️</span> to move the panda across the maze!  
      Find checkpoints 📍 to learn more.
    </p>
    <Lottie animationData={pandaAnimation} loop autoplay style={{ height: "100px", width: "100px" }} />

    <Button variant="contained" sx={{ mt: 2 }} onClick={() => setShowStart(false)}>
      Start Game
    </Button>
  </DialogContent>
</Dialog>


      <div className="maze">
        {mazeData.map((row, i) => (
          <div key={i} className="maze-row">
            {row.map((cell, j) => {
              const isPlayer = i === playerPos.row && j === playerPos.col;
              const isEnd = i === endRow && j === endCol;
              const isGhost = ghostPositions.some(g => g.row === i && g.col === j);
              const ghost = ghostPositions.find(g => g.row === i && g.col === j);
              const checkpoint = checkpoints.find(cp => cp.row === i && cp.col === j);

              return (
                <div key={j} className={`maze-cell ${cell === 1 ? "wall" : "path"} ${isPlayer ? "player" : ""}`}>
                  {isPlayer && (
                    <Lottie animationData={pandaAnimation} style={{ width: 50, height: 50 }} />
                  )}
                  {isGhost && <span className="ghost" style={{ color: ghost?.color }}>👻</span>}
                  {checkpoint && !isPlayer && (
                    <div 
                      className="checkpoint"
                      style={{ backgroundColor: checkpoint.color }}
                      onClick={() => setActiveCheckpoint(checkpoint)}
                    >
                      <div className="checkpoint-label">{checkpoint.title}</div>
                      📍
                    </div>
                  )}
                  {isEnd && !isPlayer && "🏁"}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Checkpoint Popup */}
      {activeCheckpoint && (
        <Dialog 
          open={true}
          onClose={() => setActiveCheckpoint(null)}
          PaperProps={{ 
            style: { 
              background: "#fff",
              padding: "24px",
              borderRadius: "15px",
              minWidth: "400px",
              width: "90%"
            }
          }}
        >
          <IconButton
            onClick={() => setActiveCheckpoint(null)}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              bgcolor: "red",
              color: "white",
              width: "40px",
              height: "40px",
              "&:hover": { bgcolor: "darkred", opacity: 0.8 }
            }}
          >
            <CloseIcon sx={{ fontSize: "24px" }} />
          </IconButton>

          <DialogTitle sx={{ fontSize: "24px", fontWeight: "bold" }}>{activeCheckpoint.title}</DialogTitle>
          <DialogContent>
            <p style={{ fontSize: "18px" }}>{activeCheckpoint.description}</p>
            {activeCheckpoint.link && (
              <Button 
                variant="contained"
                href={activeCheckpoint.link}
                target="_blank"
                sx={{
                  backgroundColor: activeCheckpoint.color,
                  fontSize: "20px",
                  padding: "10px 20px",
                  "&:hover": { bgcolor: activeCheckpoint.color, opacity: 0.8 }
                }}
              >
                Visit
              </Button>
            )}
          </DialogContent>
        </Dialog>
      )}

      <Dialog open={showEnd} onClose={() => setShowEnd(false)}>
        <DialogTitle>🎉 Congratulations!</DialogTitle>
        <DialogContent>Thanks for exploring my portfolio maze!</DialogContent>
      </Dialog>
    </div>
  );
};

export default Maze;
