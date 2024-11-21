import React, { useEffect, useRef } from 'react';

const CakePage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const angle = useRef(0);

  const drawCake = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.save();
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.rotate(angle.current);
    
    // Draw cake
    ctx.fillStyle = 'pink';
    ctx.fillRect(-50, -25, 100, 50); // Cake base
    ctx.fillStyle = 'white';
    ctx.fillRect(-50, -35, 100, 10); // Icing

    ctx.restore();
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        angle.current += 0.01; // Increment angle for spinning
        drawCake(ctx);
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      animate();
    }
    return () => {
      cancelAnimationFrame(animationFrameRef.current!);
    };
  }, []);

  return (
    <div>
      <h1 style={{ color: 'black' }}>Happy Birthday!</h1>
      <canvas ref={canvasRef} style={{ display: 'block', margin: '0 auto' }} />
    </div>
  );
};

export default CakePage;
