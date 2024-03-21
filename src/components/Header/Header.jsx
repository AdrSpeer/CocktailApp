import Logo from "../../assets/svg/Logo";
import Menu from "../Menu/Menu";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <Logo />
        <Menu />
      </nav>
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
    </header>
  );
};

export default Header;
