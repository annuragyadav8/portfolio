import { useEffect, useRef } from 'react';

export default function BackgroundEffect() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[1] grid-overlay transition-colors duration-300"
      style={{
        backgroundAttachment: 'fixed',
        // Define fallback coordinates
        ['--mouse-x' as string]: '50%',
        ['--mouse-y' as string]: '30%',
        backgroundImage: `
          radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            rgba(99, 102, 241, 0.08),
            rgba(168, 85, 247, 0.03) 40%,
            transparent 80%
          )
        `,
      }}
    >
      {/* Light mode alternate gradient styling overlay */}
      <div className="absolute inset-0 bg-transparent dark:hidden transition-opacity pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(
              650px circle at var(--mouse-x) var(--mouse-y),
              rgba(99, 102, 241, 0.05),
              rgba(168, 85, 247, 0.02) 40%,
              transparent 70%
            )
          `
        }}
      />
    </div>
  );
}
