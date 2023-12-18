import React from 'react';
import './Skills.css';

function Skills() {
  const technicalSkills = [
    { name: 'Python', description: 'Interpreted programming language.' },
    { name: 'HTML5', description: 'HTML is the standard markup language for documents designed to be displayed in a web browser.' },
    { name: 'CSS', description: 'CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.' },
    { name: 'JavaScript', description: 'ECMA Script.' },
    { name: 'React', description: 'Front End Library' },
    { name: 'UI/UX', description: 'Figma Design Software' },
    { name: 'AWS Cloud', description: 'Cloud Foundations' },
    { name: 'Cybersecurity', description: 'CTT Microcredential' },
  ];

  const softSkills = [
    { name: 'Communication', description: 'Effective communication skills.' },
    { name: 'Project Management', description: 'Efficient project management techniques.' },
    { name: 'Teamwork', description: 'Experience in collaborative teamwork.' },
    { name: 'Business Development', description: 'Strategies for business growth and development.' },
    { name: 'Leadership', description: 'Strong leadership and guidance abilities.' },
    { name: 'Critical Thinking', description: 'Analytical and critical thinking skills.' },
    { name: 'Problem Solving', description: 'Proficient in solving complex problems.' },
    { name: 'Time Management', description: 'Effective time management and organization.' },
  ];

  return (
    <div className="skills-container">
      <h2 className="skill-heading">Technical Skills</h2>
      <ul className="skills-list">
        {technicalSkills.map(skill => (
          <li key={skill.name} className="skill-item">
            <strong>{skill.name}:</strong> {skill.description}
          </li>
        ))}
      </ul>
      
      <h2 className="skill-heading">Soft Skills</h2>
      <ul className="skills-list">
        {softSkills.map(skill => (
          <li key={skill.name} className="skill-item">
            <strong>{skill.name}:</strong> {skill.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;


