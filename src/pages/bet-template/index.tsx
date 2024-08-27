import { useEffect, useRef, useState } from "react";
import { Footer } from "../../components/footer";
import { BallMain } from "../../components/page-betting/ball-main";
import { ContentIframe } from "../../components/page-sebrae/content-iframe/intex";
import screenMobile from "../../assets/img/screen-mobile-vaidebet.webp";
import screenDesk from "../../assets/img/screen-desk-vaidebet.webp";
import screenWide from "../../assets/img/screen-wide-vaidebet.webp";
import vaidebet from "../../assets/img/vaidebet.svg";
import obabet from "../../assets/img/obabet.svg";
import betpix from "../../assets/img/betpix.svg";
import FigmaBetting from "../../assets/img/figma-betting.png";
import ScreensHorizontal from "../../assets/img/screensHorizontal.png";
import { CardCrown } from "./components/card-crown";

import "./index.scss";
import { CardBet } from "./components/card-bet";
import { CardOdd } from "./components/card-odd";
import { CardSkeleton } from "./components/card-skeleton";

export const BetTemplate = () => {
  const HorizontalScreen = useRef<HTMLImageElement>(null);
  const [scale, setScale] = useState(1.5);
  const [deviceType, setDeviceType] = useState<string>(screenDesk);
  const [transition, setTransition] = useState(1);

  useEffect(() => {
    const detectDeviceType = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setDeviceType(screenMobile);
      } else if (screenWidth >= 768 && screenWidth < 1600) {
        setDeviceType(screenDesk);
      } else {
        setDeviceType(screenWide);
      }
    };
    detectDeviceType();
    window.addEventListener("resize", detectDeviceType);
    return () => {
      window.removeEventListener("resize", detectDeviceType);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newScale = 1.5 - (scrollPosition / windowHeight) * 0.5;
      setScale(Math.max(1, newScale));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleHorizontalScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const positionimage = HorizontalScreen.current?.offsetTop
      const startScroll = positionimage && positionimage - windowHeight


      if (startScroll && positionimage) {
        if (scrollPosition > startScroll)
          setTransition(startScroll - scrollPosition);
      }
    };

    window.addEventListener("scroll", handleHorizontalScroll);

    return () => {
      window.removeEventListener("scroll", handleHorizontalScroll);
    };
  }, []);

  return (
    <div className="content-page-betting-template">
      <div className="content-top">
        <div className="center-content">
          <div className="content-text">
            <h1>Betting Sport Template</h1>
            <h2>
              Prototyping and implementation of the first version of a sports
              betting system
            </h2>
            <span className="point-principal" />
          </div>
          <BallMain />
        </div>
      </div>
      <img
        className="img-template"
        src={deviceType}
        loading="eager"
        alt="screen template"
        style={{
          transform: `scale(${scale})`,
        }}
      />
      <div className="content-main">
        <div className="content-template-description">
          <p>Vector Iconography Development</p>
          <p>
            Incorporate illustrations to enhance user communication, employing
            SVG format for web optimization without compromising performance.
            Notably, all icons showcased on this project have been personally
            designed, adding a distinct touch to the creative work presented
          </p>
        </div>
        <div className="content-grid-template">
          <CardSkeleton />
          <CardOdd />
          <CardCrown />
        </div>
        <div className="content-card-template"></div>
        <div className="content-template-description">
          <p>Vector Iconography Development</p>
          <p>
            Incorporate illustrations to enhance user communication, employing
            SVG format for web optimization without compromising performance.
            Notably, all icons showcased on this project have been personally
            designed, adding a distinct touch to the creative work presented
          </p>
          <div className="brand-bets">
            <a href="https://obabet.com/" target="blank">
              <img src={obabet} alt="logo obabet" />
            </a>
            <a href="https://vaidebet.com/" target="blank">
              <img src={vaidebet} alt="logo vaidebet" />
            </a>
            <a href="https://betpix.com/" target="blank">
              <img src={betpix} alt="logo betpix" />
            </a>
          </div>
        </div>
      </div>
      <img
        ref={HorizontalScreen}
        className="img-horizontal"
        src={ScreensHorizontal}
        alt="screens"
        style={{ transform: `translateX(${transition}px)` }}
      />
      <div className="content-main">
        <ContentIframe
          img={FigmaBetting}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F4SMcNumfgCs0zxg4IvNjkB%2FOrion-Ramon-_-Twinfo%3Ftype%3Ddesign%26node-id%3D2943%253A348%26mode%3Ddesign%26t%3DgV3RBnUBUTPzRWUO-1"
        />
        <Footer />
      </div>
    </div>
  );
};
