import React from 'react';
import './skill.css';
import EducationIcon from '../../asset/education.png'; 
import SkillsIcon from '../../asset/technical.png';
import CareerIcon from '../../asset/career.png';

const Skills = () => {
    return (
        <section id='skills'>
            <h2 className="skillTitle">About Me</h2>
            <p className="skillDesc">
                A highly motivated IT student with a diverse background, dedicated to continuous learning 
                and driven by a strong passion to excel in the field of Software Engineering.
            </p>
            
            <div className="skillBars">
                <div className="skillBar">
                    <img src={EducationIcon} alt="Education" className="skillBarImg" />
                    <div className="skillBarText">
                        <h3>Educational Background</h3>
                        <p>
                            Successfully completed G.C.E. Advanced Level examinations and earned a Certificate Course in IT from the Open University of Sri Lanka. Currently reading for the National Diploma in Technology (NDT) specializing in IT at the University of Moratuwa, building a solid foundation in computer science principles.
                        </p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={SkillsIcon} alt="Skills" className="skillBarImg" />
                    <div className="skillBarText">
                        <h3>Technical Skills</h3>
                        <p>
                            Proficient in Frontend Technologies including HTML, CSS, JavaScript, and React.js framework. Developing strong competencies in Object-Oriented Programming (OOP), Data Structures, Systems Modeling, Git/GitHub version control, and core backend logic troubleshooting.
                        </p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={CareerIcon} alt="Career" className="skillBarImg" />
                    <div className="skillBarText">
                        <h3>Career Aspirations</h3>
                        <p>
                         My ultimate career aspiration is to leverage this diverse experience to become a Full-Stack Software Engineer, creating clean, efficient, and impactful technology solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;