import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,

    title: "Vision-Based Inventory Re-Identification",

    description:
      "Developed a deep metric learning pipeline for similarity-based inventory retrieval using DINOv2, FAISS, and hybrid loss optimization for open-set image re-identification.",

    image: "/projects/project1.png",

    tags: [
      "PyTorch",
      "DINOv2",
      "FAISS",
      "Deep Metric Learning",
    ],

    githubUrl:
      "https://github.com/Prernatripathi7/Synnapse-PS-1",
  },

  {
    id: 2,

    title: "NeuroSymbolic Supply Chain Intelligence",

    description:
      "Developed a NeuroSymbolic AI system combining knowledge graphs, symbolic reasoning, and Llama-3.2 fine-tuning for supply chain disruption prediction and hallucination-resistant reasoning.",

    image: "/projects/project2.png",

    tags: [
      "Llama 3.2",
      "Knowledge Graphs",
      "NeuroSymbolic AI",
      "LoRA",
    ],

    githubUrl:
      "https://github.com/tanvyaagrawal/supply-chain-agent",
  },

  {
    id: 3,

    title: "Developer Portfolio Website",

    description:
      "Designed and developed a responsive personal portfolio website featuring modern UI design, animations, dark mode, and interactive project showcases using React and Tailwind CSS.",

    image: "/projects/project3.png",

    tags: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Frontend",
    ],

    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of projects focused on machine learning,
          AI systems, and modern web development.
        </p>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project) => (

            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden
              shadow-xs border border-border/50 card-hover"
            >

              {/* IMAGE */}
              <div className="h-44 flex items-center justify-center bg-secondary/20 p-4">

                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain
                  transition-transform duration-500
                  group-hover:scale-105"
                />

              </div>
              {/* CONTENT */}
              <div className="p-6">

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">

                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium
                      border rounded-full bg-secondary
                      text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* GITHUB LINK */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2
                  text-foreground/80 hover:text-primary
                  transition-colors duration-300"
                >
                  <Github size={20} />
                  <span className="text-sm">View Project</span>
                </a>

              </div>
            </div>

          ))}
        </div>

        {/* MAIN GITHUB BUTTON */}
        <div className="text-center mt-12">

          <a
            className="cosmic-button w-fit flex items-center
            mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Prernatripathi7"
          >
            Check My GitHub
            <ArrowRight size={16} />
          </a>

        </div>
      </div>
    </section>
  );
};