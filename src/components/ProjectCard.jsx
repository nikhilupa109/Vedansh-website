import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card" data-category={project.category}>
      <div className="project-image">
        <LazyImage
          src={project.image || '/placeholder-project.jpg'}
          alt={project.title}
        />
      </div>
      <div className="project-content">
        <span className="project-tag">{project.tag}</span>
        <h3>{project.title}</h3>
        <p className="project-location">📍 {project.location}</p>
        <p className="project-desc">{project.description}</p>
        <Link to={`/projects/${project.slug}`} className="project-link">
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
