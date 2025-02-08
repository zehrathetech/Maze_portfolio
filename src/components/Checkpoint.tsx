import React from "react";
import { CheckpointData } from "../data/checkpoints"; // Import the data type

interface CheckpointProps {
  data: CheckpointData;
  onTrigger: () => void;
}

const Checkpoint: React.FC<CheckpointProps> = ({ data, onTrigger }) => {
  return (
    <div
      className="checkpoint"
      onClick={onTrigger}
      style={{
        position: "absolute",
        left: `${data.x}px`,
        top: `${data.y}px`,
        backgroundColor: data.color,
        padding: "10px",
        borderRadius: "50%",
        cursor: "pointer",
      }}
    >
      <h3>{data.title}</h3>
    </div>
  );
};

export default Checkpoint;
