import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

// fehlerbehebung dummy
function filler() {
  console.log("Filler");
}

const Home = () => {
  return (
    <>
      <Header />
      <section className="filter-grid" id="jump">
        <HashLink to={`/types/gin#jump`}>
          <div className="filter background-1">
            <h2>Gin</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <img src="../../../public/svg/Gin.jpg" alt="" />
          </div>
        </HashLink>
        <HashLink to={`/types/vodka#jump`}>
          <div className="filter background-2">
            <h2>Vodka</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <img src="../../../public/svg/vodka.jpg" alt="" />
          </div>
        </HashLink>
        <HashLink to={`/types/rum#jump`}>
          <div className="filter background-3">
            <h2>Rum</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <img src="../../../public/svg/rum.jpg" alt="" />
          </div>
        </HashLink>
        <HashLink to={`/types/scotch#jump`}>
          <div className="filter background-4">
            <h2>Scotch</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <img src="../../../public/svg/scotch.jpg" alt="" />
          </div>
        </HashLink>
        <HashLink to={`/types/non-alcoholic#jump`}>
          <div className="filter background-5">
            <h2>Alkoholfrei</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <img src="../../../public/svg/none.jpg" alt="" />
          </div>
        </HashLink>
        <div className="filter background-6" onClick={filler()}>
          <h2>Zufall</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <p className="question">?</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
