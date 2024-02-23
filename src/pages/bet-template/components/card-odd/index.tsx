import { CardBet } from "../card-bet";
import "./index.scss";
import ScreenPhone from "../../../../assets/img/odd-vaidebet.png";
import SidebarFlout from "../../../../assets/img/flout-foote.png";

export const CardOdd = () => {
  return (
    <div className="content-card-template justify-content-end">
      <div className="screen-content-dinamic">
        <CardBet />
        <img className="flout-bar" src={SidebarFlout} alt="screen" />
        <img src={ScreenPhone} alt="screen" />
      </div>
     <div className="grid-card-odd">
        <h2 className="title-card-odd">
          The Crucial Role of Redux in State Management
        </h2>
        <p className="description-card-odd">
          Redux is essential for managing state in React apps, offering a
          centralized store for predictable data flow. Its structured architecture
          simplifies state updates across components, enhancing maintainability
          and scalability. By enforcing separation of concerns, Redux promotes
          code organization and facilitates debugging, boosting developer
          efficiency.
        </p>
     </div>
    </div>
  );
};
