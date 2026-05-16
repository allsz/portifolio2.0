import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[90px] bg-[var(--bg)] border-b border-[var(--border)] shadow-[var(--shadow)] flex items-center justify-around px-5 box-border transition-transform duration-300 ease-in-out z-[1000] ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="font-bold text-3xl text-[var(--text-h)]">Allsz</div>
      <div className="flex gap-5">
        <a href="#home" className="text-[var(--text)] no-underline font-medium transition-colors duration-200 hover:text-[var(--accent)]">Home</a>
        <a href="#about" className="text-[var(--text)] no-underline font-medium transition-colors duration-200 hover:text-[var(--accent)]">Sobre</a>
        <a href="#contact" className="text-[var(--text)] no-underline font-medium transition-colors duration-200 hover:text-[var(--accent)]">Contato</a>
      </div>
    </nav>
  );
};

export default Navbar;
