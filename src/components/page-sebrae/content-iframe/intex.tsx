import { useState } from "react";
import { useLanguageContext } from "../../../context/LanguageContext";
import pt from '../../../config/locales/pt.json'
import en from '../../../config/locales/en.json'
import "./index.scss";

export const ContentIframe = (props: { src: string; img?: string }) => {
  const [isHiddend, setIsHiddend] = useState<boolean>(false);
  const [index, setIdex] = useState<boolean>(false);
  const { language } = useLanguageContext();
  const languegeRender = language === 'en' ? en : pt;

  const handleShowIframe = () => {
    setIsHiddend(true);
    setTimeout(() => {
      setIdex(true);
    }, 300);
  };

  return (
    <div className={`content-iframe ${isHiddend ? "skeleton" : ""}`}>
      <div
        onClick={handleShowIframe}
        className={`glass 
            ${isHiddend ? "hidden" : ""}
            ${index ? "z-under" : ""}
            `}
      >
        <i className="icon-visibility" />
        <p>{languegeRender.figmaBox}</p>
      </div>
      {isHiddend ? (
        <iframe title="iframe-figma" className="iframe-figma" src={props.src} allowFullScreen />
      ) : (
        <img src={props.img} alt="banner" />
      )}
    </div>
  );
};
