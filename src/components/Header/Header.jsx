import ArrowScroll from "../../assets/svg/ArrowScroll";
import Nav from "../Nav/Nav";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

const Header = () => {
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
        <ArrowScroll />
      </div>
    </header>
  );
};

export default Header;
