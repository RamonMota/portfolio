import { GridCardSebrae } from '../../components/page-sebrae/grid-cards';
import { ContentIframe } from '../../components/page-sebrae/content-iframe/intex';
import { CircleColor } from '../../components/page-sebrae/circle-color';
import { GridIcon } from '../../components/page-sebrae/grid-icon';
import { DeviceScreen } from '../../components/page-sebrae/device-screen';
import { Footer } from '../../components/footer';
import { IconsLint } from './svg/icons';

import './index.scss'
import { Astronaut } from './svg/astronaut';
import { useEffect, useState } from 'react';
import { ScrollTopContent } from '../../components/scroll-top-content';

export const Sebrae = () => {

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
              E-commerce
              <br />
              Sebrae events
            </h1>
            <h2>
              Prototyping and implementation of the first version of a sports
              betting system
            </h2>
            {/* <span className="point-principal" /> */}
          </div>
          <div className='content-illustrator'>
            <Astronaut />
          </div>
        </ScrollTopContent>
      </div>



      <div className='content-page-sebrae-padding'>
        <div className='content-title'>
          <div className='content-introduction'>
            <h2>
              Led UX/UI and Front-end development to transform in-person events to a robust e-commerce platform amid the pandemic. Streamlined existing infrastructure for a user-friendly digital hub, enhancing online transactions and overall digital experience for entrepreneurs</h2>
            <span className='point-principal' />
          </div>
        </div>
        <GridCardSebrae />
        <div className='content-brand'>
          <p className='title'>Color scheme</p>
          <p className='description'>
            Color scheme developed based on the brand colors, along with a set of complementary colors, designed to be implemented into the system to maintain visual identity
          </p>
          <div className='grid-colors'>
            <div className='d-flex gap-sm flex-column align-items-center'>
              <p className='color-title'>Brand</p>
              <div className='d-flex gap-sm'>
                <CircleColor color={'295BAE'} />
                <CircleColor color={'fff'} />
              </div>
            </div>
            <div className='d-flex gap-sm flex-column align-items-center'>
              <p className='color-title'>Complementary</p>
              <div className='d-flex gap-sm'>
                <CircleColor color={'2F4358'} />
                <CircleColor color={'A7D2F6'} />
                <CircleColor color={'D9D9D9'} />
              </div>
            </div>
            <div className='d-flex gap-sm flex-column align-items-center'>
              <p className='color-title'>Attention</p>
              <div className='d-flex gap-sm'>
                <CircleColor color={'6FAE1C'} />
                <CircleColor color={'FD611F'} />
              </div>
            </div>
          </div>
        </div>
        <div className='content-icons'>
          <GridIcon />
          <p>Vector Iconography Development</p>
          <p>
            Incorporate illustrations to enhance user communication, employing SVG format for web optimization without compromising performance. Notably, all icons showcased on this project have been personally designed, adding a distinct touch to the creative work presented
          </p>
          <IconsLint />
        </div>
        <DeviceScreen />
        <ContentIframe src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FG5LP5npZCmW2gBvDFcVrec%2FE-commerce-Sebrae%3Ftype%3Ddesign%26node-id%3D1408%253A96%26mode%3Ddesign%26t%3DkgUDVQKdT4kZFEuC-1' />
        <Footer />
      </div>
    </div>
  )
}
