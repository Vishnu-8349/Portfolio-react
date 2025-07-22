import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
// import profile_img from '../../assets/about_profile.svg';
import profile_img from '../../assets/vishnu (2).jpg';

const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" className='about-img'/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className='about-para'>
                    <p>I have built multiple projects that showcase my skills in front-end and full-stack development, turning concepts into functional web applications. Each project reflects my hands-on experience, problem-solving ability, and passion for clean, user-friendly design.</p>
                    <p>Driven by a passion for development, I love turning ideas into interactive and user-friendly web applications. Building projects fuels my creativity and deepens my technical expertise with every line of code.</p>                    
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "55%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width: "60%"}}/></div>
                    <div className="about-skill"><p>Node JS</p><hr style={{width: "65%"}}/></div>
                    <div className="about-skill"><p>Mongo DB</p><hr style={{width: "70%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
        <hr />
            <div className="about-achievement">
                <h1>2+</h1>
                <p>INDUSTRIAL TRAINING COMPLETED</p>
            </div>
        </div>
    </div>
  )
}

export default About
