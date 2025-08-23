"use client";

import { useEffect, useRef } from "react";

export default function MouseTracker() {
  const elementRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationId: number;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const onMouseMove = (event: MouseEvent) => {
      mousePos.current = { x: event.clientX - 64, y: event.clientY - 64 };
    };

    const animate = () => {
      const easing = 0.1;

      currentPos.current.x = lerp(
        currentPos.current.x,
        mousePos.current.x,
        easing
      );
      currentPos.current.y = lerp(
        currentPos.current.y,
        mousePos.current.y,
        easing
      );

      if (elementRef.current) {
        elementRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className="hidden lg:block fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-[-1]"
      style={{
        background: `radial-gradient(circle, rgba(47, 129, 247, 0.3) 0%, transparent 70%)`,
        filter: "blur(20px)",
      }}
    />
  );
}
