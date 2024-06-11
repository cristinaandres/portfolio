import { useEffect, useRef, useCallback } from 'react';

const useRippleEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ripples = useRef<{ x: number; y: number; radius: number; alpha: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ripples.current.forEach(ripple => {
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.alpha})`;
        ctx.stroke();
        ripple.radius += 2;  // Increase the radius increment to make the ripple larger
        ripple.alpha -= 0.005;  // Decrease the alpha to fade out the ripple
        if (ripple.alpha <= 0) {
          ripples.current.shift();
        }
      });
      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  const addRipple = useCallback((x: number, y: number) => {
    ripples.current.push({ x, y, radius: 0, alpha: 1.0 });
  }, []);

  return { canvasRef, addRipple };
};

export default useRippleEffect;
