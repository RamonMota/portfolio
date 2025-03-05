import { CardBet, CardBetClone } from "../card-bet";
import "./index.scss";
import ScreenPhoneCut from "../../img/odd-vaidebet-mobile.png";
import { useScreenSize } from "../../../../hooks/size-screen";
import { useLanguageContext } from "../../../../context/LanguageContext";
import pt from '../../../../config/locales/pt.json'
import en from '../../../../config/locales/en.json'

export const CardOdd = () => {

  const screen = useScreenSize();
  const { language } = useLanguageContext();
  const languegeRender = language === 'en' ? en : pt;

  return (
    <div className="content-card-template justify-content-end">
      <div className="screen-content-dinamic">
        <CardBet />
        <CardBetClone />
        {screen.isDesktop && (
          <img className="screen-odd" src={ScreenPhoneCut} alt="screen" />
        )}
      </div>
      <div className="grid-card-odd">
        <h2 className="title-card-odd">{languegeRender.bettingSportTemplate.titleThirdBox}</h2>
        <p className="description-card-odd">{languegeRender.bettingSportTemplate.subtitleThirdBox}</p>
      </div>
    </div>
  );
};
