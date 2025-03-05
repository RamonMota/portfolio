import { useEffect, useState } from "react";
import { LoadingColor } from "../loader-color";
import { SvgCrown } from "../svg-crown";
import "./index.scss";
import { useLanguageContext } from "../../../../context/LanguageContext";
import pt from '../../../../config/locales/pt.json'
import en from '../../../../config/locales/en.json'

const BrandColor = [
  {
    name: "ORION",
    principal: "#061f29ff",
    principalDark: "#000000ff",
    secondary: "#f9531eff",
  },
  {
    name: "VAIDEBET",
    principal: "#2A3038",
    principalDark: "#191818",
    secondary: "#F2AD2F",
  },
  {
    name: "OBABET",
    principal: "#1c3730",
    principalDark: "#12231e",
    secondary: "#58B947",
  },
  {
    name: "BETPIX",
    principal: "#1d273dff",
    principalDark: "#161d2dff",
    secondary: "#bcd032ff",
  },
];
export const CardCrown = () => {
  const interationInterval = 5;
  const [brand, setBrand] = useState(BrandColor[0]);
  const { language } = useLanguageContext();
  const languegeRender = language === 'en' ? en : pt;

  const handleBrand = (index: number) => {
    setBrand(BrandColor[index]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (BrandColor.indexOf(brand) + 1) % BrandColor.length;
      setBrand(BrandColor[nextIndex]);
    }, 4500);

    return () => clearInterval(intervalId);
  }, [brand]);

  return (
    <div
      className="content-card-template"
      style={{ background: brand.principalDark }}
    >
      <div className="card-template-description">
        <div className="d-flex gap-sm">
          <div onClick={() => handleBrand(0)}>
            <LoadingColor
              timer={interationInterval}
              color={BrandColor[0].secondary}
              startTime={brand.name === BrandColor[0].name}
            />
          </div>
          <div onClick={() => handleBrand(1)}>
            <LoadingColor
              timer={interationInterval}
              color={BrandColor[1].secondary}
              startTime={brand.name === BrandColor[1].name}
            />
          </div>
          <div onClick={() => handleBrand(2)}>
            <LoadingColor
              timer={interationInterval}
              color={BrandColor[2].secondary}
              startTime={brand.name === BrandColor[2].name}
            />
          </div>
          <div onClick={() => handleBrand(3)}>
            <LoadingColor
              timer={interationInterval}
              color={BrandColor[3].secondary}
              startTime={brand.name === BrandColor[3].name}
            />
          </div>
        </div>
       <div className="d-flex gap-md flex-column">
          <p>{languegeRender.bettingSportTemplate.titleSecondBox}</p>
          <p>{languegeRender.bettingSportTemplate.subtitleSecondBox}</p>
       </div>
        <div className="d-flex gap-md"></div>
      </div>
      <SvgCrown
        colorPrincipal={brand.principal}
        colorSecondary={brand.secondary}
      />
    </div>
  );
};
