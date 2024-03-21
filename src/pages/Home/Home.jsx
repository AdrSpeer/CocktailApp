import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <section className="filter-grid">
        <Link to={`/types/}`}>
          <div className="filter-1">
            <h2>Gin</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Link>
        <Link to={`/types/}`}>
          <div className="filter-2">
            <h2>Vodka</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Link>
        <Link to={`/types/}`}>
          <div className="filter-3">
            <h2>Rum</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Link>
        <Link to={`/types/}`}>
          <div className="filter-4">
            <h2>Scotch</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Link>
        <Link to={`/types/}`}>
          <div className="filter-5">
            <h2>Alkoholfrei</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Link>
        <Link to={`/types/}`}>
          <div className="filter-6">
            <h2>Zufall</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default Home;
