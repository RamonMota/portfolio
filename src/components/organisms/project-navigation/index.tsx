import { projects } from '../../../config/projects/projects';
import { useLanguageContext } from '../../../context/LanguageContext';
import pt from '../../../config/locales/pt.json';
import en from '../../../config/locales/en.json';
import { ProjectMosaic } from '../project-mosaic';

export const ProjectNavigation = () => {
  const { language } = useLanguageContext();
  const languageRender = language === 'en' ? en : pt;

  return (
    <nav className="flex flex-column w-full gap-3xl px-xl py-5xl rounded-t-xl border-t-[1.5px] border-t-[rgba(242,242,242,0.1)] bg-[linear-gradient(180deg,#1b212a,#151a22)]  shadow-[0px_-18px_14px_0_rgba(0,0,0,0.25)]">
      <div className="flex flex-col gap-2 m-auto">
        <h3 className="text-center text-[35px] font-semibold text-white">
          {languageRender.otherProjects.title}
        </h3>
        <p className="text-center text-md font-light not-italic text-white opacity-70">
          {languageRender.otherProjects.subtitle}
        </p>
      </div>
      <ProjectMosaic projects={projects} />
    </nav>
  );
};
