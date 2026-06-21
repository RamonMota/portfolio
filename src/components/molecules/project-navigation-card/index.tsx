import { ProjectItem } from '../../../config/projects/projects';

export const ProjectNavigationCard = (props: {
  label: string;
  project: ProjectItem;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={props.onClick}
    className="group relative min-h-40 w-full cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-black text-left shadow-lg"
  >
    {props.project.image && (
      <img
        src={props.project.image}
        alt={props.project.name}
        className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-70"
      />
    )}
    <span className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
    <span className="relative z-10 flex h-full min-h-40 flex-col justify-end gap-2 p-5">
      <span className="text-xs font-semibold uppercase tracking-wide text-white/70">
        {props.label}
      </span>
      <span className="text-lg font-bold text-white">
        {props.project.name}
      </span>
    </span>
  </button>
);
