import React, { useEffect, useRef } from 'react';

const HeartPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const progress = useRef(0);

  const goldenRatio = (1 + Math.sqrt(5)) / 2; // Golden ratio
  const lineWidth = 0.5; // Fine lines

  const drawHeart = (ctx: CanvasRenderingContext2D, progress: number) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = lineWidth;

    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37 * goldenRatio, 70 * goldenRatio, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80 * goldenRatio, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80 * goldenRatio, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37 * goldenRatio, 75, 40);

    ctx.stroke();
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        if (progress.current < 1) {
          progress.current += 0.01; // Increment progress
          drawHeart(ctx, progress.current);
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(animationFrameRef.current!);
        }
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = 'pink';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        progress.current = 0; // Reset progress to start building the heart
        animate();
      }
    }
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Function to generate random positions for the sticker
  const getRandomPosition = () => {
    const x = Math.random() * 100; // Random x position
    const y = Math.random() * 100; // Random y position
    return { x, y };
  };

  const stickerStyle = {
    position: 'absolute',
    width: '50px',
    height: '50px',
    backgroundImage: 'url(src/assets/bubuanddudu.png.jpg)', // Use the image from the assets
    backgroundSize: 'cover',
    filter: 'drop-shadow(2px 2px 5px rgba(0,0,0,0.5))',
  };

  const stickers = Array.from({ length: 5 }).map(() => {
    const { x, y } = getRandomPosition();
    return (
      <div key={x + y} style={{ ...stickerStyle, left: `${x}%`, top: `${y}%`, position: 'absolute' }} />
    );
  });

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <h1 style={{ color: 'white' }}>Heart Shape</h1>
      <canvas ref={canvasRef} width={150} height={150} />
      {stickers}
    </div>
  );
};

export default HeartPage;
