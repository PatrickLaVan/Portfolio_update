import React, { useEffect } from 'react';
import unia from '../assets/images/UniAugsburg_title.webp';

const Uni = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <div className="project-background">
            <div className="one">
                <h1>Patrick La Van</h1>
            </div>                       
            <div className="two"></div>
            <div className="three"></div>
            <div className="four"></div>
                    
            <div className="title introtext">
              <h1>Titel</h1>
              <h2>subtitle</h2>
            </div>
            {/* <div className="overlay"></div> */}
            <div className="pic-wrapper">
              <img src={unia} alt="" className='project-pic' />
            </div>
              
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

export default Uni;