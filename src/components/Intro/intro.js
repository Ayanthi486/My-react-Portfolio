import React from 'react';
import './intro.css';
import bg from '../../asset/image.png';
import contactImg from '../../asset/contact.png';

const Intro = () => {
  return (
    <section id="Intro"> 
        <div className="introContent">
            <span className="hello">Hi </span>
            <span className="introText"> I'm <span className="introName">Ayanthi</span><br/>Aspiring Software Engineer</span>
            <p className="introPara">
                I am an IT student currently reading for my National Diploma in Technology (NDT),<br /> 
                with a keen interest in pursuing a career in Software Engineering.<br /> 
                I love writing clean code, exploring modern technologies, and solving technical problems.<br />
                I am looking forward to expanding my skills through practical experiences and
                contributing to impactful tech projects.
            </p>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="contact" className="desktopMenuImg" />Contact Me
            </button>
        </div>
        <img src={bg} alt="portfolio" className="bg"/>
    </section>
  )
}

export default Intro;