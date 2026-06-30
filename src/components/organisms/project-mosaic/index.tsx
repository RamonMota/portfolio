import { ProjectItem } from '../../../config/projects/projects';
import { ProjectNavigationCard } from '../../molecules/project-navigation-card';

const mosaicColumns = [
  'lg:col-span-6',
  'lg:col-span-2',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-2',
  'lg:col-span-6',
  'lg:col-span-6',
  'lg:col-span-4',
  'lg:col-span-2',
];

const mobileColumns = [
  'col-span-1',
  'col-span-1',
  'col-span-1',
  'col-span-1',
  'col-span-1',
  'col-span-1',
  'col-span-1',
  'col-span-1',
  'col-span-1',
];

const getMosaicClassName = (index: number) => [
  mobileColumns[index % mobileColumns.length],
  mosaicColumns[index % mosaicColumns.length],
].join(' ');

export const ProjectMosaic = ({
  projects,
  onProjectSelect,
}: {
  projects: ProjectItem[];
  onProjectSelect?: () => void;
}) => (
  <div className="mx-auto grid w-full grid-cols-1 gap-sm lg:grid-cols-12">
    {projects.map((project, index) => (
      <ProjectNavigationCard
        key={project.link}
        className={`h-[280px] ${getMosaicClassName(index)}`}
        onSelect={onProjectSelect}
        {...project}
      />
    ))}
  </div>
);
