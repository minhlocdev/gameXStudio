export default interface ProjectsProps {
  name: string;
  description: string;
}

type Props = {
  project: ProjectsProps;
};
export const ProjectCard = ({ project }: Props) => {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div
        key={project.name}
        className="group hover:border-primary/60 relative m-4 h-[300px] w-full rounded-2xl border border-neutral-700 bg-neutral-900/40 p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_var(--color-primary)]"
      ></div>
      <h3 className="group-hover:text-secondary font-blod mb-2 text-2xl md:text-3xl text-white transition-colors duration-300">
        {project.name}
      </h3>
      <p className="text-muted md:text-md">{project.description}</p>
    </div>
  );
};
