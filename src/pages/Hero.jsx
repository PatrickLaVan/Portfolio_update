import React from 'react'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { AiFillInstagram } from "react-icons/ai";
import { RiPlantFill } from "react-icons/ri";
import { DiAtom } from "react-icons/di";
import { GiWhiteBook } from "react-icons/gi";
import { PiPencilLineFill } from "react-icons/pi";
import { GiConsoleController } from "react-icons/gi";
import Bild from '../assets/images/Lanfingpage_Illu.png'

const Hero = ({id}) => {

  const scrollOffsets = {
    work: 0,       // Offset for the "Arbeiten" section
    showreel: -230,  // Offset for the "Showreel" section
    contact: 0,      // No offset for "Kontakt"    
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
    }
  };


  return (
    <section id={id} className="hero-wrapper">
        <div className="hero-background">
            <div className="one">
                <h1>Patrick La Van</h1>
            </div>
            <div className="introtext">
              <h1>Hallo,<br/>wie gehts?</h1>
              <h2>Ich bin Patrick und ich mache <br/> Graphik-Design, Animationen und Front-End-Development in München</h2>
              <div className="bton-wrapper">
                <a
                    className='bton-white' 
                    href="#work"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll("work");
                    }}
                    >
                      ARBEITEN</a>
              
                <a
                    className='bton-white' 
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll("contact");
                    }}
                    >
                      KONTAKT</a>
              </div>
            </div>
            <div className="two"></div>
            <div className="three">
              <div className="icon-wrapper">
                <RiPlantFill size={52} color='var(--green-rgb)' className='Icon'/>
                <DiAtom size={58} color='var(--green-rgb)' className='Icon'/>
                <GiWhiteBook size={48} color='var(--green-rgb)' className='rotate Icon'/>
                <PiPencilLineFill size={52} color='var(--green-rgb)' className='Icon'/>
                <GiConsoleController size={52} color='var(--green-rgb)' className='Icon'/>
              </div>
            </div>
            <div className="four">
              <div className="icon-wrapper">
                <a href="https://www.linkedin.com/in/patrick-lavan-8500ba266" target='blank'>
                  <TiSocialLinkedinCircular size={45} color='var(--green-rgb)' cursor={'pointer'}/></a>
                <a href="https://www.youtube.com/@patricklavan1729" target='blank'>
                  <PiYoutubeLogoFill size={40} color='var(--green-rgb)' cursor={'pointer'}/></a>
                <a href="https://www.instagram.com/p.la.van/" target='blank'>
                <AiFillInstagram size={43} color='var(--green-rgb)' cursor={'pointer'}/></a>
                
              </div> 
            </div>
            <div className="five">
                <h1 className="deco-1">POR<br/>TFO<br/>LIO</h1>
                <h2  className="year">2024</h2>
            </div>
            <img className="Bild" src={Bild} alt="Profilbild" />
        </div>
    </section>
  )
}

export default Hero