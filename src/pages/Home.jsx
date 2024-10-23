import React from 'react';
import { Work, About, Contact, Hero, Showreel} from '../pages'
import Navbar from '../components/Navbar';
import BackupBtn from '../components/backupbtn';

export default function Home() {


  return (
    <div>
      <div>
        <Navbar/>
        {/* <BackupBtn/> */}
        <Hero id="hero"/>
      </div>
      <Showreel id="showreel"/>
      <Work id="work"/>
      {/* <About id="about"/> */}
      <Contact id="contact"/>
    </div>
  );
}
