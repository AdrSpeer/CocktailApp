import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <section className="filter-grid" id="jump">
        <Link to={`/types/gin`}>
          <div className="filter background-1">
            <h2>Gin</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <img src="../../../public/svg/Gin.jpg" alt="" />
          </div>
        </Link>
        <Link to={`/types/vodka`}>
          <div className="filter background-2">
            <h2>Vodka</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <img src="../../../public/svg/vodka.jpg" alt="" />
          </div>
        </Link>
        <Link to={`/types/rum`}>
          <div className="filter background-3">
            <h2>Rum</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <img src="../../../public/svg/rum2.avif" alt="" />
          </div>
        </Link>
        <Link to={`/types/scotch`}>
          <div className="filter background-4">
            <h2>Scotch</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <img src="../../../public/svg/scotch.jpg" alt="" />
          </div>
        </Link>
        <Link to={`/types/non-alcoholic`}>
          <div className="filter background-5">
            <h2>Alkoholfrei</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <img src="../../../public/svg/Gin.jpg" alt="" />
          </div>
        </Link>
        <div className="filter background-6" onClick={"filler"}>
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
