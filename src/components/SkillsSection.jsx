import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages & Frameworks
{ name: "C", category: "languages & frameworks" },
{ name: "C++", category: "languages & frameworks" },
{ name: "Python", category: "languages & frameworks" },
{ name: "PyTorch", category: "languages & frameworks" },
{ name: "Scikit-Learn", category: "languages & frameworks" },
{ name: "NumPy", category: "languages & frameworks" },
{ name: "Pandas", category: "languages & frameworks" },
{ name: "HTML/CSS", category: "languages & frameworks" },
{ name: "JavaScript", category: "languages & frameworks" },
{ name: "React", category: "languages & frameworks" },
{ name: "Tailwind CSS", category: "languages & frameworks" },

  // Core Competencies
  { name: "Data Structures & Algorithms", category: "competencies" },
  { name: "Competitive Programming", category: "competencies" },
  { name: "Machine Learning", category: "competencies" },
  { name: "Deep Learning", category: "competencies" },
  { name: "Web Development", category: "competencies" },
];

const categories = ["all", "languages & frameworks", "competencies"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center justify-center"
            >
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};