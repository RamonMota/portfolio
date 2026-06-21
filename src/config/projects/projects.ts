import bannerSebrae from '../../assets/img/banner-sebrae.png';
import bannerVaidebet from '../../assets/img/banner-vaidebet.png';
import webkit_UI from '../../assets/img/webkit_UI.png';
import { PathsPages } from '../paths/path';

export type ProjectItem = {
  name: string;
  link: PathsPages;
  image?: string;
  isLocked?: boolean;
};

export const projects: ProjectItem[] = [
  {
    name: 'Webkit UI Corporativo',
    link: PathsPages.WEBKIT_UI,
    image: webkit_UI,
  },
  {
    name: 'Betting Sport Template',
    link: PathsPages.SPORT_BETTING_PLATAFORM,
    image: bannerVaidebet,
  },
  {
    name: 'E-commerce Sebrae events',
    link: PathsPages.SEBRAE,
    image: bannerSebrae,
  },
  {
    name: 'Case login UX',
    link: PathsPages.LOGIN_CASE,
  },
  // {
  //   name: 'Case login UX',
  //   link: PathsPages.LOGIN_CASE,
  //   isLocked: true,
  // },
];

export const availableProjects = projects.filter((project) => !project.isLocked);
