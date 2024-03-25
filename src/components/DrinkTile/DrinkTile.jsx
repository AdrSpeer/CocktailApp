import './DrinkTile.css';
import { PopContext } from '../../context/Context';
import { DrinkContext } from '../../context/Context';
import { useContext } from 'react';
import { ColorRing } from 'react-loader-spinner';

const DrinkTile = ({ props, loading }) => {
  const { setPop } = useContext(PopContext);
  const { setDrinkId } = useContext(DrinkContext);

  const popToggle = (nameString) => {
    setPop(true);
    setDrinkId(nameString);
  };
  return (
    <section className='drink-grid' id='drinks'>
      {props?.map((drink, index) =>
        loading ? (
          <div className='drink' key={index}>
            <ColorRing wrapperStyle={{ margin: 'auto' }} />
          </div>
        ) : (
          <div
            onClick={() => popToggle(drink.idDrink)}
            className='filter'
            key={drink.idDrink}>
            <h3>{drink.strDrink}</h3>
            <img src={drink.strDrinkThumb} alt='a picture of the drink' />
          </div>
        )
      )}
    </section>
  );
};

export default DrinkTile;
