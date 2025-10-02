import RevealOnScroll from "../RevealOnScroll";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import BloomBuddyLogo from "../../assets/Logo.png";
import FrogLogo from "../../assets/frog.png";
import Here from "../../assets/here.gif";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* BloomBuddy */}
            <ProjectCard
              title="BloomBuddy"
              description="An all-in-one productivity app designed to boost organization and motivation."
              bullets={[
                "Integrated calendar, habit tracker, and goal tracker",
                "Built rewards system for streaks & task completion",
                "Synced with Firebase for real-time data & notifications",
              ]}
              techStack={[
                "Android Studio",
                "Java",
                "Firebase Realtime Database",
                "Firebase Authentication",
                "XML",
                "GitHub",
                "Firebase Cloud Messaging",
              ]}
              image={BloomBuddyLogo}  
              link="/projects/bloombuddy"
            />

            {/* Healthy Frog */}
            <ProjectCard
              title="Health Tracker Prototype"
              description="An interactive prototype for an easy and interactive food tracking app."
              bullets={[
                "Figma Prototype with interactive components",
                "User-friendly design focused on simplicity and ease of use",
                "Features include meal logging, nutrition insights, and friend system",
              ]}
              techStack={[
                "Figma",
                "UI/UX Design",
                "Prototyping",
              ]}
              image={FrogLogo} 
              link="/projects/healthy-frog"
            />

            {/* Personal Website */}
            <ProjectCard
              title="Personal Website"
              description="A responsive portfolio site with smooth navigation and dynamic sections."
              bullets={[
                "Animated transitions and mobile-first design",
                "Custom project highlights with scroll reveals",
                "Interactive contact form powered by EmailJS",
              ]}
              techStack={[
                "JavaScript",
                "React",
                "EmailJS",
                "CSS",
                "HTML",
              ]}
              image={Here}
              link="/projects/personal-website"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
