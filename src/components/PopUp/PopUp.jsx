import "./PopUp.css";
import { PopContext } from "../../context/Context";
import { useContext } from "react";

const PopUp = () => {
  const { pop, setPop } = useContext(PopContext);
  const popToggle = () => {
    setPop((popUp) => !popUp);
    return (
      <div className="pop-up">
        <button>Click</button>
        <div className={pop === true ? "pop pop-show" : "pop"}>
          <p>AAAAAAA</p>
        </div>
      </div>
    );
  };
};

export default PopUp;
