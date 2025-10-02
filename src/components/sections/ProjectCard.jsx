import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, bullets, techStack, image, link }) => {
  return (
    <div className="p-6 rounded-xl border border-white/10 bg-gray-900/50 hover:scale-[1.02] hover:border-blue-500/30 hover:shadow-lg transition-transform duration-300">
      {/* Image/Preview */}
      <div className="w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-500">[Project Preview]</span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-3">{description}</p>

      {/* Bullet Highlights */}
      <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mb-4">
        {bullets.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, key) => (
          <span
            key={key}
            className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-xs hover:bg-blue-500/20 transition"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link */}
      <div className="flex justify-end">
        <Link
          to={link}
          className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
        >
          View Project →
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
