import "./DrinkTile.css";
import { PopContext } from "../../context/Context";
import { DrinkContext } from "../../context/Context";
import { useContext } from "react";

const DrinkTile = ({ props }) => {
  const { setPop } = useContext(PopContext);
  const { drinkId, setDrinkId } = useContext(DrinkContext);

  const popToggle = (nameString) => {
    setPop(true);
    setDrinkId(nameString);
  };
  return (
    <section className="drink-grid" id="drinks">
      {props ? (
        props?.map((drink) => (
          <div onClick={() => popToggle(drink.idDrink)} className="filter" key={drink.idDrink}>
            <h3>{drink.strDrink}</h3>
            <img src={drink.strDrinkThumb} alt="a picture of the drink" />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default DrinkTile;
