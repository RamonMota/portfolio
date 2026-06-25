import bannerSebrae from '../../assets/img/banner-sebrae.png';
import bannerVaidebet from '../../assets/img/banner-vaidebet.png';
import webkit_UI from '../../assets/img/webkit_UI.png';
import { PathsPages } from '../paths/path';

export type ProjectItem = {
  name: string;
  link: PathsPages;
  image?: string;
  tags?: string[];
  isLocked?: boolean;
};

export const projects: ProjectItem[] = [
  {
    name: 'Webkit UI Corporativo',
    link: PathsPages.WEBKIT_UI,
    image: webkit_UI,
    tags: ['Design System', 'Front']
  },
  {
    name: 'Betting Sport Template',
    link: PathsPages.SPORT_BETTING_PLATAFORM,
    image: bannerVaidebet,
    tags: ['UI/UX', 'Front']
  },
  {
    name: 'E-commerce Sebrae events',
    link: PathsPages.SEBRAE,
    image: bannerSebrae,
    tags: ['UI/UX', 'Front']
  },
  // {
  //   name: 'Fintech Dashboard',
  //   link: PathsPages.FINTECH_DASHBOARD,
  //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  //   tags: ['Dashboard', 'Front']
  // },
  // {
  //   name: 'Healthcare Portal',
  //   link: PathsPages.HEALTHCARE_PORTAL,
  //   image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  //   tags: ['UX Research', 'Front']
  // },
  // {
  //   name: 'Case login UX',
  //   link: PathsPages.LOGIN_CASE,
  //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  //   tags: ['SaaS', 'Front']
  // },
  // {
  //   name: 'Case login UX',
  //   link: PathsPages.LOGIN_CASE,
  //   isLocked: true,
  // },
];

export const availableProjects = projects.filter((project) => !project.isLocked);
