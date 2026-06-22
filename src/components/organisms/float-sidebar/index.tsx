import { useLanguageContext } from "../../../context/LanguageContext";
import { SocialMedia } from "../../molecules/social-media";
import { House } from "lucide-react";
import pt from '../../../config/locales/pt.json'
import en from '../../../config/locales/en.json'
import "./index.scss";

export const FloatSidebar = (props: {
  isOpen?: boolean;
  setIsOpen?: () => void;
}) => {
  const { language } = useLanguageContext();
  const languegeRender = language === 'en' ? en : pt;

  return (
    <div className={`content-float-sidebar ${props.isOpen ? "show-up" : "hidden-down"}`}>
      <button
        type="button"
        onClick={props.setIsOpen}
        className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-[50px] border-0 bg-[linear-gradient(180deg,var(--color-principal),var(--color-principal-shadow),var(--color-principal-light))] bg-[length:200%_200%] p-0 text-white shadow-[inset_0_-2px_1px_1px_rgb(0_0_0_/_13%)] select-none hover:scale-95 hover:bg-[length:100%_190%] hover:shadow-none active:scale-95"
      >
        <House size={22} strokeWidth={2.5} color="var(--color-white)" />
      </button>
      <i className="vertical-line" />
      <SocialMedia />
      <a className="btn-principal" href="mailto:ramonmotha@gmail.com">
        {languegeRender.footer.button}
      </a>
    </div>
  );
};
