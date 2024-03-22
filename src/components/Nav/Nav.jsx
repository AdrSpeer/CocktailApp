import "./Nav.css";
import Logo from "../../assets/svg/Logo";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <Logo />
      </Link>
      <Menu />
    </nav>
  );
};

export default Nav;
