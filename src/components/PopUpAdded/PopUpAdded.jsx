import "../PopUp/PopUp.css";
import { PopContext } from "../../context/Context";
import { DrinkContext } from "../../context/Context";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PopUpAdded = (props) => {
  const { pop, setPop } = useContext(PopContext);
  const { drinkId } = useContext(DrinkContext);
  const { closePop } = useParams();

  const popToggleClose = () => {
    setPop(false);
  };

  useEffect(() => {
    setPop(false);
  }, [closePop]);

  let ingridients = [];
  //   const getIngridients = () => {
  //     for (let item in drink.drinks[0]) {
  //       if (item.includes("strIngredient")) {
  //         if (
  //           typeof drink.drinks[0][item] != "string" ||
  //           drink.drinks[0][item] === ""
  //         ) {
  //         } else {
  //           ingridients.push(drink.drinks[0][item]);
  //         }
  //       }
  //     }
  //   };
  //   drink ? getIngridients() : "";

  return (
    <div className="pop-up">
      <div className={pop === true ? "pop pop-show" : "pop"}>
        {props ? (
          <div className={pop === true ? "drink-div" : "drink-div-hide"}>
            <img
              onClick={() => popToggleClose()}
              className="back-cross"
              src="../../../public/svg/Cross.svg"
              alt=""
            />
            {/* <img
              className="drink-img"
              src={drink.drinks[0].strDrinkThumb}
              alt=""
            /> */}
            <div className="content-con">
              {/* <h4 className="pop-h4">{drink.drinks[0].strDrink}</h4>
              <h5 className="pop-h5">Ingredients</h5>
              {ingridients.length !== 0
                ? ingridients.map((ingridient, index) => (
                    <p className="pop-p" key={index}>
                      {ingridient}
                    </p>
                  ))
                : ""} */}
              <h5 className="pop-h5">Instruction</h5>
              <p className="pop-p"></p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PopUpAdded;
