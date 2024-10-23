import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import benu from '../assets/images/Benu_title.webp';
import egs from '../assets/images/EGS_title.webp';
import mss from '../assets/images/MSSalmon_title.webp';
import museum from '../assets/images/MuseumWerdenfels_title.webp';
import unia from '../assets/images/UniAugsburg_title.webp';

const Work = ({ id }) => {
  const [filter, setFilter] = useState('all'); // Zustand für den Filter

  useEffect(() => {
    const allProjects = document.querySelectorAll('.card'); // Alle Projektkarten im DOM
    if (filter === 'all') {
      // Wenn "Alle Projekte" ausgewählt ist, zeige alle Karten
      allProjects.forEach(card => {
        card.style.display = 'block';
      });
    } else {
      // Filter anwenden: Karten, die nicht der Kategorie entsprechen, ausblenden
      allProjects.forEach(card => {
        if (card.classList.contains(filter)) {
          card.style.display = 'block'; // Karte anzeigen
        } else {
          card.style.display = 'none'; // Karte ausblenden
        }
      });
    }
  }, [filter]); // Abhängigkeit von `filter`, um den Effekt neu auszulösen

  return (
    <section id={id} className='h-to-content'>
      <div className="work-menu-container">
        <div className="deco-work">ARB<br />EIT<br />EN</div>
        <div className='work-menu-wrap'>
          <div className="work-menu">
            <li className='menu-text'>
              <button onClick={() => setFilter('all')}>Alle Projekte</button>
            </li>
            <li className='menu-text'>
              <button onClick={() => setFilter('grafikdesign')}>Grafik Design</button>
            </li>
            <li className='menu-text'>
              <button onClick={() => setFilter('illustration')}>Illustrationen</button>
            </li>
            <li className='menu-text'>
              <button onClick={() => setFilter('animation')}>Animationen</button>
            </li>
            <li className='menu-text'>
              <button onClick={() => setFilter('andere')}>WIP</button>
            </li>
          </div>
        </div>
      </div>

      {/* <hr className='line' /> */}

      <div className='project-section h-to-content '>
        <div id="cards" className="justify-center align-middle">          
          <div className="card animation"> 

            <div className="card-wrapper">

              <div className="card-info">

                <div className="drei-top-info"></div>

                <div className="projekt-kontainer">
              
                  
                  <p className="project-client">TH Augsburg</p>
                  <hr></hr>
                  <p className="project-year">2020</p>
                  <p className="project-discript">2D animierter Kurzfilm als Abschlussarbeit in Kommunikationsdesign</p>
                      
                </div>

                <div className="tags">
                    <div className="tag">Photoshop</div>
                    <div className="tag">After Effects</div>
                    <div className="tag">Premier Pro</div>
                    <div className="tag">TV-Paint</div>
                </div>

              </div>
              <Link to="/project-benu" className="card-pic-link">
                <div className="card-pic">
          
                <div className="eins"></div>
                <div className="drei-bot"></div>
                <div className="drei-top"></div>            
            
                <div className="card-content">
                  <div className="card-info-title">
                  <h1>Benu-2D Short</h1>
                  </div>      
                  <img src={benu} alt="Benu-2D Animation" />	
                  <div className="overlay"></div>
                </div>                
            	
                </div>
              </Link>
          	</div>
          </div>

          <div className="card grafikdesign">
            <div className="card-wrapper">

              <div className="card-info">

                <div className="drei-top-info"></div>
                
                <div className="projekt-kontainer">
              
                  <p className="project-year">2020</p>
                  <p className="project-client">Neonpastell GmbH</p>
                  <hr></hr>
                  <p className="project-discript">Gestaltung eines Floorguide Flyers für das Museum Werdernfels</p>
                      
                </div>

                <div className="tags">
                    <div className="tag">Illustrator</div>
                    <div className="tag">InDesign</div>
                    <div className="tag">Fotografie</div>
                    <div className="tag">Photoshop</div>
                  </div>

              </div>

              <Link to="/project-mw" className="card-pic-link">
                <div className="card-pic">
            
                  <div className="eins"></div>
                  <div className="drei-bot"></div>
                  <div className="drei-top"></div>            
              
                  <div className="card-content">
                    <div className="card-info-title">
                    <h1>Museum Werdenfels</h1>
                    </div>      
                    <img src={museum} alt="Museum Werdenfels" />	
                    <div className="overlay"></div>
                  </div>                
                
                </div>
              </Link>

          	</div>
          </div>

          <div className="card illustration">
            <div className="card-wrapper">

              <div className="card-info">

                <div className="drei-top-info"></div>
                
                <div className="projekt-kontainer">

                  <p className="project-year">2020</p>
                  <p className="project-client">Neonpastell GmbH</p>
                  <hr></hr>
                  <p className="project-discript">Freelance Illustration für das firmeninterne Magazin der EGS</p>
                      
                </div>

                <div className="tags">
                    <div className="tag">Photoshop</div>
                    <div className="tag">Pen & Paper</div>
                    
                </div>

              </div>
              <Link to="/project-egs" className="card-pic-link">
                <div className="card-pic">

                <div className="eins"></div>
                <div className="drei-bot"></div>
                <div className="drei-top"></div>            

                <div className="card-content">
                  <div className="card-info-title">
                  <h1>EGS Digitalisierung</h1>
                  </div>      
                  <img src={egs} alt="EGS-Digitalisierung" />	
                  <div className="overlay"></div>
                </div>                

                </div>
              </Link>
            </div>
          </div>

          <div className="card animation"> 

            <div className="card-wrapper">

              <div className="card-info">

                <div className="drei-top-info"></div>

                <div className="projekt-kontainer">
              
                  <p className="project-year">2021</p>
                  <p className="project-client">Studio Soybloq</p>
                  <hr></hr>
                  <p className="project-discript">Animation für die Zwischensequenzen im Videospiel M.S. Salmon</p>
                      
                </div>

                <div className="tags">
                    <div className="tag">Toon Boon</div>            
                </div>

              </div>
              <Link to="/project-mss" className="card-pic-link">
                <div className="card-pic">
          
                <div className="eins"></div>
                <div className="drei-bot"></div>
                <div className="drei-top"></div>            
            
                <div className="card-content">
                  <div className="card-info-title">
                  <h1>M.S. Salmon</h1>
                  </div>      
                  <img src={mss} alt="M.S. Salmon" />	
                  <div className="overlay"></div>
                </div>                
            	
                </div>
              </Link>
          	</div>
          </div>

          <div className="card illustration">
            <div className="card-wrapper">

              <div className="card-info">

                <div className="drei-top-info"></div>
                
                <div className="projekt-kontainer">
              
                  <p className="project-year">2020</p>
                  <p className="project-client">Neonpastell GmbH</p>
                  <hr></hr>
                  <p className="project-discript">Illustrationen für eine Plakat Serie zu den Festlichkeiten von 50 Jahre UNI Augsburg
                  </p>
                      
                </div>

                <div className="tags">
                    <div className="tag">Pen & Paper</div>
                    <div className="tag">Illustrator</div>                    
                </div>

              </div>
              <Link to="/project-uni" className="card-pic-link">
                <div className="card-pic">
          
                <div className="eins"></div>
                <div className="drei-bot"></div>
                <div className="drei-top"></div>            
            
                <div className="card-content">
                  <div className="card-info-title">
                  <h1>Benu-2D Short</h1>
                  </div>      
                  <img src={unia} alt="50 Jahre UNI Augsburg" />	
                  <div className="overlay"></div>
                </div>                
            	
                </div>
              </Link>
          	</div>
          </div>

          <div className="card illustration andere">
            <div className="card-wrapper">

              <div className="card-info">

                <div className="drei-top-info"></div>
                
                <div className="projekt-kontainer">

                  <p className="project-year">2018</p>
                  <p className="project-client">TH Augsburg</p>
                  <hr></hr>
                  <p className="project-discript">Illustrierte Kuzgeschichte</p>
                      
                </div>

                <div className="tags">
                    <div className="tag">Pen & Paper</div>
                    <div className="tag">Watercolor</div>
                    <div className="tag">Acryl</div>
                    <div className="tag">InDesign</div>
                </div>

              </div>
              <Link to="/project-jagd" className="card-pic-link">
                <div className="card-pic">

                  <div className="eins"></div>
                  <div className="drei-bot"></div>
                  <div className="drei-top"></div>            

                  <div className="card-content">
                    <div className="card-info-title">
                    <h1>Anderes</h1>
                    </div>      
                    <img src={benu} alt="Die Jagd" />	
                    <div className="overlay"></div>
                  </div>                

                </div>
              </Link>
            </div>
          </div>
          {/* Weitere Karten hier */}
        </div>
      </div>
    </section>
  );
};

export default Work
