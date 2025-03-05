import pt from '../../config/locales/pt.json'
import en from '../../config/locales/en.json'
import { useLanguageContext } from '../../context/LanguageContext';
import './index.scss'

export const Footer = (props: { isHome?: boolean | false }) => {
    const { language } = useLanguageContext();
    const languegeRender = language === 'en' ? en : pt;
    const isBr = language === 'pt';

    return (
        <div className='content-bottom mb-footer'>
            <p>{languegeRender.footer.title}</p>
            <p className={isBr ? 'pt-text' : ''}>{languegeRender.footer.subtitle}</p>
            {props.isHome &&
                <a className='btn-principal mx-auto d-flex mt-md'
                    href="mailto:ramonmotha@gmail.com"
                    target="_blank"
                >{languegeRender.footer.button}</a>
            }
        </div>
    )
}
