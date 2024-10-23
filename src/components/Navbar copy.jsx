import React, {useState, useEffect} from "react";
import { menu, close } from "../assets";
import { FaArrowUp } from 'react-icons/fa';

const Navbar = () => {
  
  const [toggle, setToggle] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);        // Ob man ganz oben ist
  const [isHovered, setIsHovered] = useState(false);   // Ob der Button gerade gehovt wird
  const [isInactive, setIsInactive] = useState(false); // Wenn nicht gescrollt wurde
  const [scrollY, setScrollY] = useState(0); 

  // Funktion zum Scrollen nach oben
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const scrollOffsets = {
    work: 0,       // Offset for the "Arbeiten" section
    showreel: -230,  // Offset for the "Showreel" section
    contact: 0,      // No offset for "Kontakt"
    about: 50,       // Offset for the "Über mich" section
    impressum: 0,  // Offset for the "Impressum" section
    datenschutz: 0 // Offset for the "Datenschutz" section
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Get the element's position relative to the document
      const offset = scrollOffsets[id] || 0; // Get the offset or default to 0
      const offsetPosition = elementPosition + offset; // Adjust the position

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setToggle(false); // Close menu after clicking
    }
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
      }, 2500);
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
  const arrowOpacity = scrollY > 120 && (isHovered || !isInactive) ? 1 : 0;
  const buttonHeight = scrollY > 120 ? '100px' : '55px';  
  const buttonPositionRight = scrollY > 120 ? '1.99%' : '1.99%';
  const buttonPositionBot = scrollY > 120 ? '5%' : 'calc(6.39vh - 2.8vh)';
  const burgerBottomHeight = scrollY > 120 ? '50%' : '0px';
  const burgerBottomOpacity = scrollY > 120 && (isHovered || !isInactive) ? 1 : 0;
  const burgerBottomColor = scrollY > 120 ? 'var(--blue-rgb)' : 'var(--green-rgb)';

  return (
    <nav className="navbar" >
      <div className='burger-menu-project'>
        <div className='b-icon-wrap'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='burger-icon'
            onClick={() => setToggle(!toggle)}
          />          
        </div>
        <div className={`${!toggle ? "hidden" : "flex"} menu-container`}>
            <ul className='menu-liste'>
              <li>
                <a
                  className='menu-text' 
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("work");
                  }}
                  >
                    Arbeiten</a>
              </li>
              <li>
                <a 
                  className='menu-text' 
                  href="#showreel"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("showreel");
                  }}>
                    Showreel</a>
              </li>
              <li>
                <a className='menu-text' 
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("contact");
                  }}>
                    Kontakt</a>
              </li>              
              <li>
                <a className='menu-text' 
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("about");
                  }}>
                    Über mich WIP</a>
              </li>
              <li>
                <a className='menu-text' 
                  href="#impressum"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("impressum");
                  }}>
                    Impressum WIP</a>
              </li>
              <li>
                <a className='menu-text' 
                  href="#datenschutz"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("datenschutz");
                  }}>
                    Datenschutz WIP</a>
              </li>
            </ul>
          </div>
      </div> 

      {/* <div 
        className="scroll-to-top-wrapper" 
        style={{ 
          height: isAtTop ? '55px' : buttonHeight, transition: 'height 0.3s ease', 
          right: isAtTop ? '1.99%' : buttonPositionRight, transition: 'right 0.3s ease', 
          bottom: isAtTop ? 'calc(6.39vh - 2.8vh)' : buttonPositionBot, transition: 'bottom 0.4s ease',
          backgroundColor: isAtTop ? 'var(--green-rgb)' : burgerBottomColor, transition: 'backgroudColor 0.4s ease'}}>
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

        <div 
          className="burger-bottom" 
          style={{ 
            opacity: isAtTop ? 0 : burgerBottomOpacity, transition: 'opacity 0.3s ease', 
            height: isAtTop ? '0px' : burgerBottomHeight, transition: 'height 0.3s ease'  }} 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
            <div className='b-icon-wrap-2'>
              <img
                src={toggle ? close : menu}
                alt='menu'
                className='burger-icon'
                onClick={() => setToggle(!toggle)}
              />          
            </div>
          <div className={`${!toggle ? "hidden" : "flex"} menu-container-bottom`}>
            <ul className='menu-liste'>
              <li>
                <a
                  className='menu-text' 
                  href="#work"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("work");
                  }}
                  >
                    Arbeiten</a>
              </li>
              <li>
                <a 
                  className='menu-text' 
                  href="#showreel"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("showreel");
                  }}>
                    Showreel</a>
              </li>
              <li>
                <a className='menu-text' 
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("contact");
                  }}>
                    Kontakt</a>
              </li>
              
              <li>
                <a className='menu-text' 
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("about");
                  }}>
                    Über mich WIP</a>
              </li>
              <li>
                <a className='menu-text' 
                  href="#impressum"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("impressum");
                  }}>
                    Impressum WIP</a>
              </li>
              <li>
                <a className='menu-text' 
                  href="#datenschutz"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("datenschutz");
                  }}>
                    Datenschutz WIP</a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>      */}
    </nav>
    

  ); 
};

export default Navbar;