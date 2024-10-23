import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';


const BackupBtn = () => {
  const [isAtTop, setIsAtTop] = useState(true);        // Ob man ganz oben ist
  const [isHovered, setIsHovered] = useState(false);   // Ob der Button gerade gehovt wird
  const [isInactive, setIsInactive] = useState(false); // Wenn nicht gescrollt wurde
  const [scrollY, setScrollY] = useState(0);           // Y-Scrollposition

  // Funktion zum Scrollen nach oben
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    let timeoutId;

    // Funktion zur Überwachung der Scrollposition
    const handleScrollTwo = () => {
      const scrollTop = window.scrollY;

      // Scroll Y Position aktualisieren
      setScrollY(scrollTop);

      // Wenn die Seite ganz oben ist
      if (scrollTop === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }

      // Wenn gescrollt wird, auf 100% Sichtbarkeit setzen
      setIsInactive(false);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Nach 2 Sekunden ohne Scrollen wird die Inaktivität gesetzt
      timeoutId = setTimeout(() => {
        setIsInactive(true);
      }, 2000);
    };

    // Event Listener zum Scrollen hinzufügen
    window.addEventListener('scroll', handleScrollTwo);

    // Event Listener entfernen, wenn die Komponente unmontiert wird
    return () => {
      window.removeEventListener('scroll', handleScrollTwo);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // Berechnung der Opacity für den Button und das Icon
  const buttonOpacity = isHovered || !isInactive ? 1 : 0.5;
  const arrowOpacity = scrollY > 100 && (isHovered || !isInactive) ? 1 : 0;
  const buttonHeight = scrollY > 100 && (isHovered || !isInactive) ? '116px' : '58px';
  const buttonPosition = scrollY > 100 ? '1%' : '1.85%';
  

  return (
    <div className="scroll-to-top-wrapper" style={{ height: isAtTop ? '58px' : buttonHeight, transition: 'height 0.3s ease', right: isAtTop ? '1.85%' : buttonPosition, transition: 'right 0.3s ease'}}>

        <button
        className="scroll-to-top-btn"
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ opacity: isAtTop ? 1 : buttonOpacity }}
        aria-label="Scroll to top"
        >
        <FaArrowUp style={{ opacity: isAtTop ? 0 : arrowOpacity, transition: 'opacity 0.3s ease' }} />
        </button>
    </div>
  );
};

export default BackupBtn;