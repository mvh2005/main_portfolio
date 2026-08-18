import { useRef, useEffect } from "react";

export function useMouseParallax() {
  const mouse = useRef({ x: 0, y: 0 });
  const smoothMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const lerp = (current, target, factor) => current + (target - current) * factor;

  const update = () => {
    smoothMouse.current.x = lerp(smoothMouse.current.x, mouse.current.x, 0.05);
    smoothMouse.current.y = lerp(smoothMouse.current.y, mouse.current.y, 0.05);
    return smoothMouse.current;
  };

  return { mouse, smoothMouse, update };
}
