import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <section className="projects-portfolio">
  <h2>Portfolio Projects</h2>

  <div className="project-entry">
    <h3>Project Name #1</h3>
    <p>Short description of the project, technologies used, and any notable features or challenges overcome.</p>
    <div className="project-links">
      <a href="https://github.com/yourusername/projectname1" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      <a href="link-to-video-demo" target="_blank" rel="noopener noreferrer">Watch Demo</a>
    </div>
  </div>

  <div className="project-entry">
    <h3>Project Name #2</h3>
    <p>Short description of the project, technologies used, and any notable features or challenges overcome.</p>
    <div className="project-links">
      <a href="https://github.com/yourusername/projectname2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      <a href="link-to-video-demo" target="_blank" rel="noopener noreferrer">Watch Demo</a>
    </div>
  </div>

  {/* Repeat for other projects */}

</section>

    </div>
  );
}

export default Projects;


