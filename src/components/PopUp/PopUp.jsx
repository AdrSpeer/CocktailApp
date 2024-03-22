import "./PopUp.css";
import { PopContext } from "../../context/Context";
import { DrinkContext } from "../../context/Context";
import { useContext, useEffect, useState } from "react";

const PopUp = () => {
  const [drink, setDrink] = useState();
  const { pop, setPop } = useContext(PopContext);
  const { drinkId, setDrinkId } = useContext(DrinkContext);
  const popToggle = () => {
    setPop(false);
  };

  useEffect(() => {
    drinkId != null
      ? fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
          .then((res) => res.json())
          .then((data) => {
            data.drinks != null ? setDrink(data) : console.log("");
          })
          .catch((error) => console.log("Fetch Drinks", error))
      : "";
  }, [drinkId]);

  console.log(drink);

  return (
    <div className="pop-up">
      <button onClick={() => popToggle()}>Click</button>
      <div className={pop === true ? "pop pop-show" : "pop"}>
        {drink ? (
          <div className={pop === true ? "drink-div" : "drink-div-hide"}>
            <img className="drink-img" src={drink.drinks[0].strDrinkThumb} alt="" />
            <div className="content-con">
              <h4 className="drink-title">{drink.drinks[0].strDrink}</h4>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PopUp;
