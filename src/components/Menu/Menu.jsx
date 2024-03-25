import "./Menu.css";
import { useState } from "react";

const Menu = () => {
  const [menuPop, setMenuPop] = useState(false);
  const popToggle = () => {
    setMenuPop((pop) => !pop);
  };
  console.log(menuPop);
  return (
    <div className="pop-dad">
      <button onClick={() => popToggle()} className={menuPop === false ? "menu-btn" : "menu-btn-show"}>
        Menu
      </button>
      <div className={menuPop === false ? "menu-pop" : "menu-pop-show"}>
        <div className="menu-div">
          <img onClick={() => popToggle()} className="menu-cross" src="../../../public/svg/Cross.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
