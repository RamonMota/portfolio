import { CardBet, CardBetClone } from "../card-bet";
import "./index.scss";
import ScreenPhoneCut from "../../img/odd-vaidebet-mobile.png";
import ScreenPhone from "../../../../assets/img/odd-vaidebet.png";
import { useScreenSize } from "../../../../hooks/size-screen";

export const CardOdd = () => {
  const screen = useScreenSize();
  return (
    <div className="content-card-template justify-content-end">
      <div className="screen-content-dinamic">
        <CardBet />
        <CardBetClone />
        <img
          className="screen-odd"
          src={ScreenPhoneCut}
          alt="screen"
        />
      </div>
      <div className="grid-card-odd">
        <h2 className="title-card-odd">
          The Crucial Role of Redux in State Management
        </h2>
        <p className="description-card-odd">
          Redux is essential for managing state in React apps, offering a
          centralized store for predictable data flow. Its structured
          architecture simplifies state updates across components, enhancing
          maintainability and scalability. By enforcing separation of concerns,
          Redux promotes code organization and facilitates debugging, boosting
          developer efficiency.
        </p>
      </div>
    </div>
  );
};
