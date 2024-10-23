import React, {useEffect,useState} from 'react';
import egs from '../assets/images/EGS_title.webp';
import Navbar from '../components/Navbar copy';

const Egs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isAtTop, setIsAtTop] = useState(true);   
  const [scrollY, setScrollY] = useState(0); 

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

  const pFixedContainerCorner = scrollY > 120 ? '10px 10px 10px 10px' : '0 10px 10px 0';
  const pFixedContainerWidth = scrollY > 120 ? '21.7%' : '22.2%';
  const pFixedOne = scrollY > 120 ? '5px' : '15px';


  return (
    
    <div>
      <Navbar/>
        <div className="project-background">
            
            <div className="placeholder">
              <div className="pic-wrapper">
                <img src={egs} alt="" className='project-pic' />
              </div>

              <div className="title-introtext">
                <h1>EGS - Digitalisierung</h1>
                
              </div> 
            </div>
            <div className="project-fixed-container"
              style={{borderRadius: isAtTop ? '0 10px 10px 0' : pFixedContainerCorner, transition: 'borderRadius 0.4s ease',
                      width: isAtTop ? '22.2%' : pFixedContainerWidth, transition: 'borderRadius 0.4s ease',
              }}
            >
              <div className="project-one"
                style={{left: isAtTop ? '15px' : pFixedOne, transition: 'borderRadius 0.4s ease' }}
              >
                <h1>Patrick La Van</h1>
              </div>
              <div className="project-two-wrapper">                
                <div className="project-two"></div>
              </div>
            </div>
            {/* <div className="three"></div> */}
            {/* <div className="project-four"></div> */}
                    
            
            {/* <div className="overlay"></div> */}              
        </div>

        

        <div className="title-introtext-test">
          <h1>Titel</h1>
          <h2>subtitle</h2>
        </div>      
        <div className="mw-inhalt h-[500px] mt-11 bg-black-500">
          <h1>Briefing:</h1>
            <h2>Wer braucht was und warum</h2>
            <h2>Was war die Aufgabe/das Problem?</h2>

          <h1>Wie habe ich das Problem gelöst?</h1>
            <h2>Ansatz/erste Skizzen/Überlegungen</h2>
            <p>Kurze Beschreibung der ersten Schritte</p>
          <h1>Revision/Änderungen/Komplikationen</h1>

          <h1>Warum habe ich diesen Weg gewählt?</h1>
          <h1>Finale Version</h1>
        </div>
      </div>
  );
};

export default Egs;