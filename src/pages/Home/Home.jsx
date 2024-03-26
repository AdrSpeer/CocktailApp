import Header from "../../components/Header/Header";
import { HashLink } from "react-router-hash-link";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import Up from "../../assets/svg/up";
import { useEffect, useState, useContext } from "react";
import globalFunctions from "../../functions/GlobalFunctions";
import { DrinkContext } from "../../context/Context";
import { PopContext } from "../../context/Context";
import Header from "../../components/Header/Header";
import { HashLink } from "react-router-hash-link";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import Up from "../../assets/svg/up";
import { useEffect, useState, useContext } from "react";
import globalFunctions from "../../functions/GlobalFunctions";
import { DrinkContext } from "../../context/Context";
import { PopContext } from "../../context/Context";

const Home = () => {
  const [toggleRadom, setToggleRadom] = useState();
  const [randomCock, setRandomCock] = useState();
  const { setPop } = useContext(PopContext);
  const { setDrinkId } = useContext(DrinkContext);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then((res) => res.json())
      .then((data) => setRandomCock(data.drinks))
      .catch((error) => console.error("Fehler im Fetch Random", error));
  }, [toggleRadom]);

  const popToggle = (nameString) => {
    setPop(true);
    setDrinkId(nameString);
    setToggleRadom((random) => !random);
  };

  return (
    <>
      <Header />
      <Up />
      <section className="filter-grid" id="drinks">
        <HashLink
          smooth
          scroll={(el) => globalFunctions.scrollWithOffset(el)}
          to={`/types/gin#drinks`}
        >
          <div className="filter background-1">
            <h2>Gin</h2>
            <img src="/svg/Gin.jpg" alt="" />
          </div>
        </HashLink>
        <HashLink
          smooth
          scroll={(el) => globalFunctions.scrollWithOffset(el)}
          to={`/types/vodka#drinks`}
        >
          <div className="filter background-2">
            <h2>Vodka</h2>
            <img src="/svg/vodka.jpg" alt="" />
          </div>
        </HashLink>
        <HashLink
          smooth
          scroll={(el) => globalFunctions.scrollWithOffset(el)}
          to={`/types/rum#drinks`}
        >
          <div className="filter background-3">
            <h2>Rum</h2>
            <img src="/svg/rum.jpg" alt="" />
          </div>
        </HashLink>
        <HashLink
          smooth
          scroll={(el) => globalFunctions.scrollWithOffset(el)}
          to={`/types/scotch#drinks`}
        >
          <div className="filter background-4">
            <h2>Scotch</h2>
            <img src="/svg/scotch.jpg" alt="" />
          </div>
        </HashLink>
        <HashLink
          smooth
          scroll={(el) => globalFunctions.scrollWithOffset(el)}
          to={`/types/scotch#drinks`}
        >
          <div className="filter background-5">
            <h2>Tequila</h2>
            <img src="/svg/Tequila.jpg" alt="" />
          </div>
        </HashLink>
        <HashLink
          smooth
          scroll={(el) => globalFunctions.scrollWithOffset(el)}
          to={`/types/scotch#drinks`}
        >
          <div className="filter background-6">
            <h2>Bourbon</h2>
            <img src="/svg/Bourbon.jpg" alt="" />
          </div>
        </HashLink>
        <HashLink
          smooth
          scroll={(el) => globalFunctions.scrollWithOffset(el)}
          to={`/types/non-alcoholic#drinks`}
        >
          <div className="filter background-1">
            <h2>Alk.frei</h2>
            <img src="/svg/none.jpg" alt="" />
          </div>
        </HashLink>
        <div
          className="filter background-2 box-question"
          onClick={() => popToggle(randomCock[0].idDrink)}
        >
          <h2>Zufall</h2>
          <p className="question">?</p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
