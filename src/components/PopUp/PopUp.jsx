import './PopUp.css';
import { PopContext } from '../../context/Context';
import { DrinkContext } from '../../context/Context';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
      ? fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
        )
          .then((res) => res.json())
          .then((data) => {
            data.drinks != null ? setDrink(data) : console.log('');
          })
          .catch((error) => console.log('Fetch Drinks', error))
      : '';
  }, [drinkId]);

  let ingridients = [];
  const getIngridients = () => {
    for (let item in drink.drinks[0]) {
      if (item.includes('strIngredient')) {
        if (
          typeof drink.drinks[0][item] != 'string' ||
          drink.drinks[0][item] === ''
        ) {
        } else {
          ingridients.push(drink.drinks[0][item]);
        }
      }
    }
  };
  drink ? getIngridients() : '';

  return (
    <div className='pop-up'>
      <div className={pop === true ? 'pop pop-show' : 'pop'}>
        {drink ? (
          <div className={pop === true ? 'drink-div' : 'drink-div-hide'}>
            <img
              onClick={() => popToggle()}
              className='back-cross'
              src='/svg/Cross.svg'
              alt=''
            />
            <img
              className='drink-img'
              src={drink.drinks[0].strDrinkThumb}
              alt=''
            />
            <div className='content-con'>
              <h4 className='pop-h4'>{drink.drinks[0].strDrink}</h4>
              <h5 className='pop-h5'>Ingredients</h5>
              {ingridients.length !== 0
                ? ingridients.map((ingridient, index) => (
                    <p className='pop-p' key={index}>
                      {ingridient}
                    </p>
                  ))
                : ''}
              <h5 className='pop-h5'>Instruction</h5>
              <p className='pop-p'>{drink.drinks[0].strInstructions}</p>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default PopUp;
