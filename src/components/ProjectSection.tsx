import { ArrowRight, ExternalLink, GitBranch } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "MedhaHub — AI Interview & Recommendaon Platform",
    description: "Developed an AI-driven mock interview platform with real-time simulations, automated background task scheduling, and intelligent user-specific recommendations.",

    image: "\MEDHA_HUB.jpeg",
    tags: ["React 19", "Tailwind CSS 4.0", "Node.js", "Express.js", "Axios", "JavaScript (ES6+)"
],
    demoUrl: "#",
    githubUrl: "https://github.com/falgunisen2003/Ai_Interview.git",
  },
  
   {
     id: 2,
  title: "Adventure",
  description:
    "A responsive travel and adventure website showcasing destinations, events, and tours with an engaging user interface built using HTML and CSS.",
  image: "\image.png",
  tags: ["HTML5", "CSS3", "Responsive Design"],
  demoUrl: "https://your-demo-link.com",
  githubUrl:"https://github.com/falgunisen2003/Mountain_Lover.git",
},
  {
    id: 3,
    title: "Tic Tac Toe",
    description:
      "A classic Tic Tac Toe game built with React and TypeScript, featuring win detection, draw detection, and a clean, responsive UI.",
    image: "tic_tac_toe.png",
    tags: ["React", "TypeScript", "CSS3"],
    demoUrl: "#",
    githubUrl: "https://github.com/falgunisen2003/TIC_TAC_TOE.git",
  },

  {
    id: 4,
    title: "Full-Stack E-Commerce Web Application",
    description:
      "Built a modern e-commerce platform with React.js, Vite, and Tailwind CSS, featuring responsive design, dynamic product listings, and seamless API integration. And Utilized Axios for REST API communication and implemented efficient state management for a smooth user experience.",
    image: "black-friday-sales-sign-neon-light_23-2151833076.avif",
     
    tags: ["React.js", "Tailwind CSS","Vite", "JavaScript (ES6+)", "Axios"
],
    demoUrl: "#",
    githubUrl: "#",
  },

   {
    
  id: 5,
  title: "QR Studio",
  description:
    "Advanced QR code generator with real-time preview, auto-generation as you type, and PNG download support.",
  image: "\QR_SCAN.png",
  tags: ["React", "TypeScript", "Vite"],
  demoUrl: "#",
  githubUrl: "#",

  },

   {
  id: 7,
  title: "TODO_APP",
  description:
    "Developed a React TypeScript task management application with CRUD functionality, state management, and a responsive user interface.",
  image: "/TODO_APP.png",
  tags: ["React", "TypeScript", "CSS"],
  demoUrl: "#",
  githubUrl: "#",
}

];

export const ProjectSection = () => {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg bg-card shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-1 text-xl font-semibold">{project.title}</h3>

                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 transition-colors duration-300 hover:text-primary"
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 transition-colors duration-300 hover:text-primary"
                    >
                      <GitBranch size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/falgunisen2003"
            target="_blank"
            rel="noreferrer"
            className="cosmic-button mx-auto flex w-fit items-center gap-2"
          >
            Check My Github
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
