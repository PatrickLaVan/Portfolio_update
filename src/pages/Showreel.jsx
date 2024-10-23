import React, { useRef, useEffect, useState } from 'react';
import Showreel22 from '../assets/videos/Showreel2022.webm';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { SlSizeFullscreen } from "react-icons/sl";
// import { SectionWrapper  } from '../hoc';

const Showreel = ({id}) => {

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.55;
    }
  }, []);


  const handleMuteToggle = () => {
    const video = videoRef.current;
    video.muted =!isMuted; 
    setIsMuted(!isMuted);
  }
  
  const handleFullscreen = () => {
    const video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  };
  

  return (
    <section id={id} className="sr-wrapper">
      <div className="showreel-bg-1"> 
        <div className="sr-one"></div>
        <div className="sr-three"></div>
        <div className="sr-six"></div>   
        <div className="sr-five">
          <h1 className='deco-2-a'>SHOW<br/>REEL</h1>
        </div>
        <div className="video-overlay"></div>
        <video 
          ref={videoRef} 
          className='videoInsert' 
          src={Showreel22} 
          controls 
          autoPlay 
          muted={isMuted} 
          loop
          onLoadedMetadata={() => (videoRef.current.volume = 0.55)}
          controlsList="nodownload" 
        />

       
        <div onClick={handleMuteToggle} className="sr-two-a"> {isMuted ? <FaVolumeMute size={25} /> : <FaVolumeUp size={25} />} </div>
          
      </div>

      <div className="showreel-bg-2">
        <h1 className='deco-2-b'>SHOW<br/>REEL</h1>
        <p className="info">Ein kurzer Überblick meiner 2D Animations Arbeiten</p>
        <div onClick={handleFullscreen} className="sr-two-b"><SlSizeFullscreen size={20} /></div>
        <div className="sr-four"></div>
      </div>
        
    </section>
    
  )
}

export default Showreel