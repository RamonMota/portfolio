import "./index.scss";
import { useLanguageContext } from "../../../../context/LanguageContext";
import pt from '../../../../config/locales/pt.json'
import en from '../../../../config/locales/en.json'

export const CardSkeleton = () => {
  const { language } = useLanguageContext();
  const languegeRender = language === 'en' ? en : pt;

  return (
    <div className="content-card-template content-card-skeleton">
      <div className="grid-skeleton">
        <div className={`content-skeleton`} />
        <div className={`content-skeleton`} />
        <div className={`content-skeleton`} />
        <div className={`content-skeleton`} />
        <div className={`content-skeleton`} />
      </div>
      <div className="card-template-description" >
        <p>{languegeRender.bettingSportTemplate.titleFirstBox}</p>
        <p>{languegeRender.bettingSportTemplate.subtitleFirstBox}</p>
      </div >
    </div >
  );
};
