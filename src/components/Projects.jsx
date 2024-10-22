import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';

const ProjectCard = ({ project, onLike }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <button onClick={() => onLike(project.id)} className="like-btn">
        Like ({project.likes})
      </button>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from backend
    axios.get('/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const handleLike = (projectId) => {
    axios.post(`/api/projects/${projectId}/like`)
      .then(response => {
        setProjects(projects.map(project => 
          project.id === projectId ? { ...project, likes: response.data.likes } : project
        ));
      })
      .catch(error => console.error('Error liking project:', error));
  };

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} onLike={handleLike} />
        ))}
      </div>
    </div>
  );
};

export default Projects;