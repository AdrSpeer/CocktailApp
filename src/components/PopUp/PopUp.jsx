import "./PopUp.css";
import { PopContext } from "../../context/Context";
import { DrinkContext } from "../../context/Context";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PopUp = () => {
  const [drink, setDrink] = useState();
  const { pop, setPop } = useContext(PopContext);
  const { drinkId } = useContext(DrinkContext);
  const { closePop } = useParams();

  const popToggle = () => {
    setPop(false);
  };

  useEffect(() => {
    setPop(false);
  }, [closePop]);

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

  let ingredients = [];
  const getIngredients = () => {
    for (let item in drink.drinks[0]) {
      if (item.includes("strIngredient")) {
        if (typeof drink.drinks[0][item] != "string" || drink.drinks[0][item] === "") {
        } else {
          ingredients.push(drink.drinks[0][item]);
        }
      }
    }
  };
  drink ? getIngredients() : "";

  let measures = [];
  const getMeasures = () => {
    for (let item in drink.drinks[0]) {
      if (item.includes("strMeasure")) {
        if (typeof drink.drinks[0][item] != "string" || drink.drinks[0][item] === "") {
        } else {
          measures.push(drink.drinks[0][item]);
        }
      }
    }
  };
  drink ? getMeasures() : "";

  console.log(drink);
  console.log(ingredients);
  console.log(measures);

  let combinedArray = [];

  for (let i = 0; i < ingredients.length; i++) {
    let measure = i < measures.length ? measures[i] : ""; // Check if a measure exists
    combinedArray.push(ingredients[i] + " " + measure);
  }

  console.log(combinedArray);

  return (
    <div className="pop-up">
      <div className={pop === true ? "pop pop-show loader-pop" : "pop"}>
        {drink ? (
          <div className={pop === true ? "drink-div" : "drink-div-hide"}>
            <img onClick={() => popToggle()} className="back-cross" src="/svg/Cross.svg" alt="" />
            <img className="drink-img" src={drink.drinks[0].strDrinkThumb} alt="" />
            <div className="content-con">
              <h4 className="pop-h4">{drink.drinks[0].strDrink}</h4>
              <h5 className="pop-h5">Ingredients</h5>
              {combinedArray.length !== 0
                ? combinedArray.map((ingredient, index) => (
                    <p className="pop-p" key={index}>
                      {ingredient}
                    </p>
                  ))
                : ""}
              <h5 className="pop-h5">Instruction</h5>
              <p className="pop-p">{drink.drinks[0].strInstructions}</p>
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
