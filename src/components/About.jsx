// src/components/About.jsx
import React from 'react';

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Responsive Design', level: 90 }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Hi! I'm a passionate web developer with a love for creating beautiful, 
              functional websites that make a difference. With years of experience in 
              front-end and back-end development, I bring ideas to life through clean 
              code and thoughtful design.
            </p>
            
            <p className="about-description">
              My journey in web development started with a curiosity about how things 
              work on the internet. Since then, I've worked on numerous projects ranging 
              from small business websites to complex web applications. I'm constantly 
              learning new technologies and best practices to stay at the forefront of 
              web development.
            </p>
            
            <p className="about-description">
              When I'm not coding, you can find me exploring new design trends, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community. I believe in writing code that's not just functional, 
              but also maintainable and scalable.
            </p>
          </div>

          <div className="skills-container">
            <h3 className="skills-title">My Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;