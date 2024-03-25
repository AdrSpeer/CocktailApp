import { useEffect, useState } from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";
import { PopContext } from "../../context/Context";
import { DrinkContext } from "../../context/Context";
import { useContext } from "react";

const SearchBar = () => {
  const [searchElement, setSearchElement] = useState("");
  const [drinks, setDrinks] = useState();

  const { setPop } = useContext(PopContext);
  const { drinkId, setDrinkId } = useContext(DrinkContext);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchElement}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.drinks != null) {
          setDrinks(data);
        } else {
          console.log("");
        }
      })
      .catch((error) => console.log("Fetch Drinks", error));
  }, [searchElement]);

  useEffect(() => {
    setSearchElement("");
  }, [drinkId]);

  const popToggle = (nameString) => {
    setPop(true);
    setDrinkId(nameString);
  };

  return (
    <>
      <input className={searchElement.length > 0 ? "input-show" : "input-hide"} type="text" placeholder="Suchen..." onChange={(event) => setSearchElement(event.target.value)} value={searchElement} />
      {drinks ? (
        <div className={searchElement.length > 0 ? "suggestions show" : "suggestions"}>
          {searchElement.length > 0
            ? drinks.drinks.map((drink, index) => (
                <Link onClick={() => popToggle(drink.idDrink)} to={""} key={index} className="link-search">
                  <p className="drink-name">{drink.strDrink}</p>
                  <img src={drink.strDrinkThumb} alt="" />
                </Link>
              ))
            : ""}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchBar;
