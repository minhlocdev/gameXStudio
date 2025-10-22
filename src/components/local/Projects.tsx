import type ProjectsProps from "../ui/ProjectCard";
import { ProjectCard } from "../ui/ProjectCard";

const projectsData: ProjectsProps[] = [
  {
    name: "Epic-War",
    description:
      "An epic war game that immerses players in large-scale battles with strategic gameplay and stunning graphics.",
  },
  {
    name: "Soc-Verse",
    description:
      "An innovative social metaverse where sports, community, and digital assets collide.",
  },
  {
    name: "FutureSport",
    description:
      "A futuristic sports game blending cutting-edge technology with real-time multiplayer action.",
  },
];

export const Projects = () => {
  return (
    <section className="mx-10 mb-20 flex flex-col items-center justify-between gap-10 pt-16 md:mx-16 md:mb-30 md:px-20 lg:mx-20">
      <h2 className="text-gradient-primary text-2xl tracking-widest md:text-4xl">
        PROJECTS
      </h2>

      <p className="text-md text-center md:text-lg">
        Check out our other exciting projects that we have made.
      </p>

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <>
            <ProjectCard key={index} project={project} />

            <div
              className={`my-8 border-t border-neutral-800 md:hidden ${index === projectsData.length - 1 && "hidden"}`}
            ></div>
          </>
        ))}
      </div>
    </section>
  );
};
