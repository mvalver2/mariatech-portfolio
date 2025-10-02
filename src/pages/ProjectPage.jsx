import { useParams } from "react-router-dom";
import BloomVid from "../components/sections/videos/bloombuddy.mp4";
import Cat from "../assets/cat.jpg";

const projectsData = {
  bloombuddy: {
    title: "BloomBuddy",
    description: `BloomBuddy is an all-in-one productivity app...`,
    tech: [
      "Android Studio",
      "Java",
      "Firebase Realtime Database",
      "Firebase Authentication",
      "XML",
      "GitHub",
      "Firebase Cloud Messaging",
    ],
    video: BloomVid,
    figmaEmbedUrl:
      "https://embed.figma.com/design/Sh5a2OXwvvI72IRmpbyw5p/T2---T3?node-id=205-632&embed-host=share",
  },
  "healthy-frog": {
    title: "Healthy Frog",
    description: `An interactive prototype for an easy and interactive food tracking app`,
    tech: ["Figma", "UI/UX Design", "Prototyping"],
    figmaProtoUrl:
      "https://embed.figma.com/proto/f8FbsTsXfOZH6m0V7MH6rW/HCI-Figma-Assignment-Resources--Maria-Valverde?node-id=2021-1324&p=f&scaling=scale-down&content-scaling=fixed&page-id=1%3A118&starting-point-node-id=2019%3A1219&embed-host=share",
  },
  "deck-app": {
    title: "Decks App",
    description: `Designed and developed a full-stack deck application...`,
    tech: ["TypeScript", "JavaScript", "REACT", "Node.js", "PostgreSQL", "CSS", "HTML"],
  },
  "personal-website": {
    title: "Personal Website",
    description: `Designed and developed a responsive personal portfolio website...`,
    tech: ["JavaScript", "REACT", "EmailJs", "CSS", "HTML"],
    image: Cat
  },
};

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projectsData[slug];

  if (!project) {
    return <div className="p-10 text-red-500">❌ Project not found</div>;
  }

  return (
    <div className="min-h-screen p-10 pt-24">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <p className="text-gray-300 mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Side-by-side Video and Figma */}
      <div className="flex flex-col md:flex-row gap-6 my-8">
        {/* Video */}
        {project.video && (
          <video
            controls
            autoPlay={false}
            loop
            muted
            className="w-full md:w-1/2 rounded-xl shadow-lg"
          >
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Figma Embed */}
        {project.figmaEmbedUrl && (
          <iframe
            className="w-full md:w-1/2 h-[500px] rounded-xl shadow-lg"
            src={project.figmaEmbedUrl}
            allowFullScreen
            style={{ border: "1px solid rgba(0,0,0,0.1)" }}
          ></iframe>
        )}
      </div>

      {project.figmaProtoUrl && (
    <iframe
      className="w-full md:w-1/2 h-[500px] rounded-xl shadow-lg"
      src={project.figmaProtoUrl}
      allowFullScreen
      style={{ border: "1px solid rgba(0,0,0,0.1)" }}
    ></iframe>
  )}

  {project.image && (
  <div className="my-8">
    <img
      src={project.image}
      alt={`${project.title} preview`}
      className="w-full md:w-1/2 rounded-xl shadow-lg"
    />
  </div>
)}

    </div>
  );
}