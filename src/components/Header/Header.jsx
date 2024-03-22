import { Link } from "react-router-dom";
import ArrowScroll from "../../assets/svg/ArrowScroll";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -20;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <header>
      <Nav />
      <section className="hero">
        <div className="hero-con">
          <div className="text-con">
            <h1>Cocktails & Getränke!</h1>
            <p>Herzlich Willkommen in der Welt der Cocktails und Getränke!</p>
            <SearchBar />
          </div>
          <div className="img-con">
            <img src="../../../public/svg/cover.svg" alt="" />
          </div>
        </div>
      </section>
      <div className="arrow-div">
        <HashLink smooth scroll={(el) => scrollWithOffset(el)} to="/#jump">
          <ArrowScroll />
        </HashLink>
      </div>
    </header>
  );
};

export default Header;
