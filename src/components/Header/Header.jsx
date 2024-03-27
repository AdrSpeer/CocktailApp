import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
import globalFunctions from "../../functions/GlobalFunctions";
import { ThemeContext } from "../../context/Context";
import { useContext } from "react";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <header id="home">
      <Nav />
      <section className="hero">
        <div className="hero-con">
          <div className="text-con">
            <h1>Cocktails & Chill!</h1>
            <p className="hero-p">
              Herzlich Willkommen in der Welt von Cocktails and Chill!
            </p>
            <SearchBar />
          </div>
          <div className="img-con">
            <img src="/svg/cover.png" alt="" />
          </div>
        </div>
      </section>
      <div className="arrow-div">
        <HashLink
          smooth
          scroll={(el) => globalFunctions.scrollWithOffset(el)}
          to="#drinks"
        >
          <img
            src={
              theme
                ? "../../../public/svg/arrowdown.svg"
                : "../../../public/svg/arrowdown-black.svg"
            }
            alt=""
          />
        </HashLink>
      </div>
    </header>
  );
};

export default Header;
