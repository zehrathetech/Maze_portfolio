// checkpoints.ts
export interface CheckpointData {
    id: number;
    x: number; // Changed from string to number
    y: number; // Changed from string to number
    title: string;
    content: string;
    color: string;
  }
  
  // Checkpoint array
  export const checkpoints: CheckpointData[] = [
    { id: 1, x: 100, y: 200, title: "About Me", content: "I am a passionate developer...", color: "blue" },
    { id: 2, x: 300, y: 400, title: "Experience", content: "Worked at XYZ company...", color: "red" },
    { id: 3, x: 500, y: 100, title: "Education", content: "Bachelor's in CS...", color: "green" },
    { id: 4, x: 700, y: 500, title: "GitHub", content: "Check out my GitHub profile!", color: "purple" },
  ];
  