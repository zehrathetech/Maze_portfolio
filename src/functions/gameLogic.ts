export const movePacman = (key: string, position: { x: number; y: number }) => {
    const speed = 20;
    let { x, y } = position;
  
    switch (key) {
      case "ArrowUp":
        y -= speed;
        break;
      case "ArrowDown":
        y += speed;
        break;
      case "ArrowLeft":
        x -= speed;
        break;
      case "ArrowRight":
        x += speed;
        break;
      default:
        break;
    }
  
    return { x, y };
  };
  