import "./PopUp.css";
import { PopContext } from "../../context/Context";
import { DrinkContext } from "../../context/Context";
import { useContext, useEffect, useState } from "react";

const PopUp = () => {
  const [drinks, setDrinks] = useState();
  const { pop, setPop } = useContext(PopContext);
  const { drinkName, setDrinkName } = useContext(DrinkContext);
  const popToggle = () => {
    setPop((popUp) => !popUp);
  };

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.drinks != null) {
          setDrinks(data);
        } else {
          console.log("");
        }
      })
      .catch((error) => console.log("Fetch Drinks", error));
  }, [drinkName]);

  return (
    <div className="pop-up">
      <button onClick={() => popToggle()}>Click</button>
      <div className={pop === true ? "pop pop-show" : "pop"}>
        {drinks
          ? drinks.drinks.map((drink, index) => (
              <div key={index}>
                {/* <p className="drink-name">{drink.strDrink}</p>
                <img src={drink.strDrinkThumb} alt="" /> */}
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default PopUp;
