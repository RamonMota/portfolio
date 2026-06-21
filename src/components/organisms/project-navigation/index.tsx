import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { ProjectNavigationCard } from '../../molecules/project-navigation-card';
import { availableProjects } from '../../../config/projects/projects';
import { useHandleChangePage } from '../../../config/usehandleChangePage';

export const ProjectNavigation = () => {
  const location = useLocation();
  const handleChangePage = useHandleChangePage();

  const currentPath = location.pathname;
  const currentIndex = availableProjects.findIndex((project) => project.link === currentPath);

  const navigationProjects = useMemo(() => {
    if (currentIndex < 0) {
      return null;
    }

    const previousIndex = (currentIndex - 1 + availableProjects.length) % availableProjects.length;
    const nextIndex = (currentIndex + 1) % availableProjects.length;

    return {
      previous: availableProjects[previousIndex],
      next: availableProjects[nextIndex],
    };
  }, [currentIndex]);

  if (!navigationProjects || availableProjects.length < 2) {
    return null;
  }

  return (
    <nav className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 px-4 py-12 sm:grid-cols-2">
      <ProjectNavigationCard
        label="Previous project"
        project={navigationProjects.previous}
        onClick={() => handleChangePage(navigationProjects.previous.link)}
      />
      <ProjectNavigationCard
        label="Next project"
        project={navigationProjects.next}
        onClick={() => handleChangePage(navigationProjects.next.link)}
      />
    </nav>
  );
};
