import ArrowScroll from "../../assets/svg/ArrowScroll";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
import PopUp from "../PopUp/PopUp";

const Header = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -20;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <header id="home">
      <PopUp />
      <Nav />
      <section className="hero">
        <div className="hero-con">
          <div className="text-con">
            <h1>Cocktails & Getränke!</h1>
            <p className="hero-p">Herzlich Willkommen in der Welt der Cocktails und Getränke!</p>
            <SearchBar />
          </div>
          <div className="img-con">
            <img src="../../../public/svg/cover.svg" alt="" />
          </div>
        </div>
      </section>
      <div className="arrow-div">
        <HashLink smooth scroll={(el) => scrollWithOffset(el)} to="/#drinks">
          <ArrowScroll />
        </HashLink>
      </div>
    </header>
  );
};

export default Header;
