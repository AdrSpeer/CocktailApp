import "./Nav.css";
import Logo from "../../assets/svg/Logo";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import PopUp from "../PopUp/PopUp";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/">
          <p className="logo">DRINKS&CHILL</p>
        </Link>
        <Menu />
      </nav>
      <PopUp />
    </>
  );
};

export default Nav;
