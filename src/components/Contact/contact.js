import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section id="contactPage">
            <div id="contact">
                <h2 className="contactPageTitle">Contact Me</h2>
                <p className="contactDesc">
                    Feel free to reach out to me for any project collaborations, 
                    internship opportunities, or professional inquiries.
                </p>

                <div className="profileInfoCard">
                    <div className="personalDetails">
                        <div className="detailItem">
                            <span className="detailIcon">👤</span>
                            <div className="detailText">
                                <h4>Name</h4>
                                <p>Ayanthi Jayamali</p>
                            </div>
                        </div>

                        <div className="detailItem">
                            <span className="detailIcon">📞</span>
                            <div className="detailText">
                                <h4>Phone Number</h4>
                                <p>+94 701110117</p> 
                            </div>
                        </div>

                        <div className="detailItem">
                            <span className="detailIcon">📍</span>
                            <div className="detailText">
                                <h4>Address</h4>
                                <p>13/A,Sadarasgama Eppawala,Sri Lanka</p> 
                            </div>
                        </div>
                    </div>

                    <hr className="dividerLine" /> 

                    <div className="socialActionsContainer">
                        <h4 className="socialSectionTitle">Find Me On</h4>
                        <div className="socialButtonsGrid">
                            
                            <a href="https://www.linkedin.com/in/ayanthi-jayamali-11891635b" target="_blank" rel="noreferrer" className="profileSocialBtn linkedinColor">
                                <span className="btnIcon">💼</span> LinkedIn
                            </a>

                            <a href="https://github.com/Ayanthi486" target="_blank" rel="noreferrer" className="profileSocialBtn githubColor">
                                <span className="btnIcon">🌐</span> GitHub
                            </a>

                            <a href="https://facebook.com/yourusernamehttps://www.facebook.com/share/1Ld1HrufFe/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="profileSocialBtn facebookColor">
                                <span className="btnIcon">👥</span> Facebook
                            </a>

                            <a href="mailto:ayanthijayamali29@gmail.com" className="profileSocialBtn emailColor">
                                <span className="btnIcon">✉️</span> Email
                            </a>
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;