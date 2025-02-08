// import React, { useState } from "react";
// import Maze from "./components/Maze";
// import Pacman from "./components/Pacman";
// import Checkpoint from "./components/Checkpoint";
// import Popup from "./components/Popup";
// import { checkpoints, CheckpointData } from "./data/checkpoints";
// import "./styles/GlobalStyles.css";

// const App: React.FC = () => {
//   const [activeCheckpoint, setActiveCheckpoint] = useState<CheckpointData | null>(null);

//   const handleCheckpointTrigger = (id: number) => {
//     const checkpoint = checkpoints.find((cp) => cp.id === id);
//     if (checkpoint) {
//       setActiveCheckpoint(checkpoint); // ✅ Store full checkpoint object
//     }
//   };

//   return (
//     <div className="game-container">
//       <Maze />
//       {checkpoints.map((cp) => (
//         <Checkpoint key={cp.id} data={cp} onTrigger={() => handleCheckpointTrigger(cp.id)} />
//       ))}
//       <Pacman onReachCheckpoint={handleCheckpointTrigger} />
//       {activeCheckpoint && <Popup data={activeCheckpoint} onClose={() => setActiveCheckpoint(null)} />}
//     </div>
//   );
// };

// export default App;




import React from "react";
import Maze from "./components/Maze";
import WoodenSign from "./components/WoodenSign";
import "./styles/GlobalStyles.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <WoodenSign />
      <Maze />
    </div>
  );
};

export default App;
// // App.tsx
// import React from "react";
// import Maze from "./components/Maze";
// import WoodenSign from "./components/WoodenSign";
// import "./styles/GlobalStyles.css";

// const App: React.FC = () => {
//   return (
//     <div className="app">
//       <div className="wooden-sign-container">
//         <WoodenSign />
//       </div>
//       <div className="maze-container">
//         <Maze />
//       </div>
//     </div>
//   );
// };

// export default App;
