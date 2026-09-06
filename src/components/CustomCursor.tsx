import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const idleTimerRef = useRef<number | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Check if device supports fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      setIsActive(true);

      // Reset idle timer - fades out after 1.5s of inactivity
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      idleTimerRef.current = window.setTimeout(() => {
        setIsActive(false);
      }, 1500);

      // Update dot position instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      // Update ring position
      if (ringRef.current) {
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

    const handleMouseLeave = () => {
      setIsActive(false);
    };

    const handleMouseEnter = () => {
      setIsActive(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`transition-opacity duration-300 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-indigo-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border border-indigo-500/50 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${
          isHovered 
            ? 'w-10 h-10 bg-indigo-500/10 border-indigo-400 scale-100' 
            : 'w-5 h-5 scale-100'
        }`}
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </div>
  );
}
