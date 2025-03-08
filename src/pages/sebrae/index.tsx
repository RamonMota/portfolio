import { GridCardSebrae } from '../../components/page-sebrae/grid-cards';
import { ContentIframe } from '../../components/page-sebrae/content-iframe/intex';
import { CircleColor } from '../../components/page-sebrae/circle-color';
import { GridIcon } from '../../components/page-sebrae/grid-icon';
import { DeviceScreen } from '../../components/page-sebrae/device-screen';
import { Footer } from '../../components/footer';
import { IconsLint } from './svg/icons';
import { Astronaut } from './svg/astronaut';
import { useEffect, useState } from 'react';
import { ScrollTopContent } from '../../components/scroll-top-content';
import './index.scss'
import pt from '../../config/locales/pt.json'
import en from '../../config/locales/en.json'
import { useLanguageContext } from "../../context/LanguageContext";

export const Sebrae = () => {

  const { language } = useLanguageContext();
  const languegeRender = language === 'en' ? en : pt;
  const [padding, setPadding] = useState(68);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight / 2;
      let newPadding = 68 * (1 - Math.min(scrollY / windowHeight, 1));

      setPadding(newPadding);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='content-page-sebrae'>



      <div className="content-top">
        <ScrollTopContent className="center-content">
          <div className="content-text" >
            <h1>
              {languegeRender.ecommerceSebrae.titleFirst}
              <br />
              {languegeRender.ecommerceSebrae.titleSecond}
            </h1>
            <h2>{languegeRender.ecommerceSebrae.subtitle}</h2>
          </div>
          <div className='content-illustrator'>
            <Astronaut />
          </div>
        </ScrollTopContent>
      </div>



      <div className='content-page-sebrae-padding'>
        <div className='content-title'>
          <div className='content-introduction'>
            <h2>{languegeRender.ecommerceSebrae.introduction}</h2>
            <span className='point-principal' />
          </div>
        </div>
        <GridCardSebrae />
        <div className='content-brand'>
          <p className='title'>{languegeRender.ecommerceSebrae.sectionTitleColor}</p>
          <p className='description'>{languegeRender.ecommerceSebrae.sectionSubtitleColor}</p>
          <div className='grid-colors'>
            <div className='d-flex gap-sm flex-column align-items-center'>
              <p className='color-title'>{languegeRender.ecommerceSebrae.colorBrand}</p>
              <div className='d-flex gap-sm'>
                <CircleColor color={'295BAE'} />
                <CircleColor color={'fff'} />
              </div>
            </div>
            <div className='d-flex gap-sm flex-column align-items-center'>
              <p className='color-title'>{languegeRender.ecommerceSebrae.colorComplementary}</p>
              <div className='d-flex gap-sm'>
                <CircleColor color={'2F4358'} />
                <CircleColor color={'A7D2F6'} />
                <CircleColor color={'D9D9D9'} />
              </div>
            </div>
            <div className='d-flex gap-sm flex-column align-items-center'>
              <p className='color-title'>{languegeRender.ecommerceSebrae.colorAttention}</p>
              <div className='d-flex gap-sm'>
                <CircleColor color={'6FAE1C'} />
                <CircleColor color={'FD611F'} />
              </div>
            </div>
          </div>
        </div>
        <div className='content-icons'>
          <GridIcon />
          <p>{languegeRender.ecommerceSebrae.sectionTitleIcon}</p>
          <p>{languegeRender.ecommerceSebrae.sectionSubtitleIcon}</p>
          <IconsLint />
        </div>
        <DeviceScreen />
        <ContentIframe src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FG5LP5npZCmW2gBvDFcVrec%2FE-commerce-Sebrae%3Ftype%3Ddesign%26node-id%3D1408%253A96%26mode%3Ddesign%26t%3DkgUDVQKdT4kZFEuC-1' />
        <Footer />
      </div>
    </div>
  )
}
