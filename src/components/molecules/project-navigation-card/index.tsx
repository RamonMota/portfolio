import { ProjectItem } from '../../../config/projects/projects';
import { useHandleChangePage } from '../../../config/usehandleChangePage';
import { Tag } from '../../atoms/tag/tag';

export const ProjectNavigationCard = ({
  className = '',
  image,
  link,
  name,
  tags,
  isLocked,
  onSelect,
}: ProjectItem & { className?: string; onSelect?: () => void }) => {
  const handleChangePage = useHandleChangePage();

  const handleSelectProject = () => {
    onSelect?.();
    handleChangePage(link);
  };

  return (
    <button
      type="button"
      disabled={isLocked}
      onClick={handleSelectProject}
      className={`group relative min-h-40 w-full cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-black text-left no-underline shadow-lg disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-70"
      />
      <span className="absolute inset-0 bg-gradient-to-f from-black via-black/50 to-transparent" />
      <div className="relative z-10 flex h-full min-h-40 flex-col justify-end gap-sm p-sm">
        {tags && (
          <div className="flex gap-2 flex-wrap absolute top-sm left-sm right-sm">
            {tags.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
        )}
        <span className="text-lg font-semibold text-white">
          {name}
        </span>
      </div>
    </button>
  );
};
