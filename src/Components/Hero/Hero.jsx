import React from 'react';
import './Hero.css';
import profile_img from "../../assets/vishnu-2.JPG";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const openResume = () => {
    window.open('/Vishnu_resume.pdf', '_blank');
  }
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img'/>
      <h1><span>I'm Vishnu Pandey,</span> a creative Full Stack Developer.</h1>
      <p>I'm a full Stack developer from Jharkhand, looking for a platform to showcase my skills.</p>
      <div className='hero-action'>
        <div className="hero-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <div className="hero-resume" onClick={openResume} style={{cursor: "pointer"}}>My Resume</div>
      </div>
    </div>
  )
}

export default Hero;
