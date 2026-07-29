import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check if device supports fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) {
      return;
    }

    setIsVisible(true);
    document.body.classList.add('custom-cursor-enabled');

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      // Update dot position instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      // Update ring position with dynamic transition
      if (ringRef.current) {
        // Use standard CSS transitions or animate ring position directly
        ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null || 
        target.closest('[role="button"]') !== null ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.interactive-hover') !== null;

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-indigo-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border border-indigo-500/50 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
          isHovered 
            ? 'w-12 h-12 bg-indigo-500/10 border-indigo-400 scale-100' 
            : 'w-6 h-6 scale-100'
        }`}
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </>
  );
}
