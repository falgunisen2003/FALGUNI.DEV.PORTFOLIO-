import { useState } from "react";
import { cn } from "@/lib/utils";

type SkillCategory = "all" | "frontend" | "backend" | "tools" |"languages";

type Skill = {
  name: string;
  level: number;
  category: Exclude<SkillCategory, "all">;
};

const skills: Skill[] = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  // { name: "Next.js", level: 80, category: "frontend" },

  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  // { name: "GraphQL", level: 60, category: "backend" },

  { name: "Git/GitHub", level: 90, category: "tools" },

  { name: "VS Code", level: 95, category: "tools" },

  { name: "Python", level: 75, category: "languages" },
  { name: "C", level: 80, category: "languages" },
  { name: "C++", level: 80, category: "languages" },
];

const categories: SkillCategory[] = [
  "all",
  "frontend",
  "backend",
  "tools",
  "languages",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>("all");

  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "all" ||
      skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="relative bg-secondary/30 px-4 py-24"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-5 py-2 capitalize transition-colors duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="card-hover rounded-lg bg-card p-6 shadow-xs"
            >
              <div className="mb-4 text-left">
                <h3 className="text-lg font-semibold">
                  {skill.name}
                </h3>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/50">
                <div
                  className="h-2 origin-left rounded-full bg-primary animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="mt-1 text-right">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;