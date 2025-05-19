import RevealOnScroll from "../RevealOnScroll";

export const Projects = () => {

    return <section id="projects" 
    className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
            > Featured Projects 
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
                hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                    <h3 className="text-xl font-bold mb-2">BloomBuddy</h3>
                    <p className="text-gray-400 mb-4">
                    BloomBuddy is an all-in-one productivity app that combines a calendar, 
                    habit tracker, and goal tracker with built-in rewards to help users stay organized, 
                    motivated, and consistent—all in one place.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Android Studio", "Java", "Firebase Realtime Database", "Firebase Authentication", "XML", "GitHub", "Firebase Cloud Messaging"]
                        .map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                "
                                >
                                    {tech}
                                </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#bloomBuddy" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                            View Project →
                        </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
                hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                    <h3 className="text-xl font-bold mb-2">Panacea</h3>
                    <p className="text-gray-400 mb-4">
                    Developed a medical pre-screening app in a team setting to assess patient symptoms before ER visits, 
                    integrating a customized GPT model to generate diagnostic reports—resulting in initial consults and 
                    an improvement in diagnostic efficiency.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Streamlit", "Python", "HTML", "CSS"]
                        .map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                "
                                >
                                    {tech}
                                </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#panacea" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                            View Project →
                        </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
                hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                    <h3 className="text-xl font-bold mb-2">Decks App</h3>
                    <p className="text-gray-400 mb-4">
                    Designed and developed a full-stack deck application with user authentication, 
                    progress tracking, and a connected SQL database, featuring RESTful APIs, real-time updates, 
                    and toast-based error handling for a seamless and user-friendly experience.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["TypeScript", "JavaScript", "REACT", "Node.js", "PostgreSQL", "CSS", "HTML"]
                        .map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                "
                                >
                                    {tech}
                                </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#deckApp" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                            View Project →
                        </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
                hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                    <h3 className="text-xl font-bold mb-2">Personal Website</h3>
                    <p className="text-gray-400 mb-4">
                    Designed and developed a responsive personal portfolio website with smooth navigation, 
                    animated transitions, and mobile-first design, featuring custom project highlights, 
                    an interactive contact form, and a dynamic navigation menu.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["JavaScript", "REACT", "EmailJs", "CSS", "HTML"]
                        .map((tech, key) => (
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                                "
                                >
                                    {tech}
                                </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#personalWebsite" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                            View Project →
                        </a>
                    </div>
                </div>

            </div>
        </div>
        </RevealOnScroll>
    </section>
}