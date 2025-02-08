import React from "react";
import { CheckpointData } from "../data/checkpoints";

interface PopupProps {
  data: CheckpointData;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ data, onClose }) => {
  return (
    <div className="popup">
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Popup;
