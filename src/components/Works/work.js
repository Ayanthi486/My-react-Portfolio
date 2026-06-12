import React from 'react';
import './work.css';
import Project1Img from '../../asset/OBM.png'; 
import Project2Img from '../../asset/FFSS.jpeg';
import Project3Img from '../../asset/BMS.jpg';

const Projects = () => {
    const projectData = [
        {
            id: 1,
            title: "Order And Billing Management System",
            description: "A comprehensive Management Information System (MIS) web application designed to streamline business workflows by automating the entire order processing and invoicing lifecycle. Built as part of my NDT academic portfolio, this system provides real-time insights into corporate sales, order statuses, and financial documentation.",
            tech: ["React.js", "Spring Boot", "MySQL"],
            github: "https://github.com/Tharaka-Jayampathi/SCM_Order_-_Billing_Module.git",
            image: Project1Img
        },
        {
            id: 2,
            title: "Hub Lanka Freight Forwarding Smart System",
            description: "My Final Year Capstone Project, 'Hub Lanka', is a comprehensive web-based system designed to centralize and enhance community engagement, local service discoveries, and resource management across Sri Lanka. The platform bridges the gap between service providers and citizens by offering a unified dashboard for real-time interactions, bookings, and verified community updates.",
            tech: ["React.js", "Express.js","PostgreSQL"],
            github: "",
            image: Project2Img
        },
        {
            id: 3,
            title: "Blog Management System",
            description: "A secure and scalable RESTful API built to handle the core backend operations of a content-driven Blog Management System. This project focuses entirely on backend architecture, implementing robust user authentication, complex database relationships, and efficient data handling for complete CRUD (Create, Read, Update, Delete) operations on articles, comments, and user profiles.",
            tech: ["Spring Boot", "MySQL", "Postman"],
            github: "",
            image: Project3Img
        }
    ];

    return (
        <section id="projects">
            <h2 className="projectsTitle">My Projects</h2>
            <p className="projectsDesc">
                Here are some of the key projects I have developed recently. Each project demonstrates 
                my technical capability, problem-solving skills, and passion for clean code.
            </p>

            <div className="projectsGrid">
                {projectData.map((project) => (
                    <div className="projectCard" key={project.id}>
                        <div className="projectImgContainer">
                            <img src={project.image} alt={project.title} className="projectImg" />
                        </div>
                      
                        <div className="projectDetails">
                            <h3 className="projectItemTitle">{project.title}</h3>
                            <p className="projectItemDesc">{project.description}</p>
                
                            <div className="projectTechs">
                                {project.tech.map((tech, index) => (
                                    <span className="techTag" key={index}>{tech}</span>
                                ))}
                            </div>
                
                            <div className="projectLinks">
                                <a href={project.github} target="_blank" rel="noreferrer" className="projectBtn githubBtn">
                                    GitHub Repo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;