import './DrinkTile.css';

const DrinkTile = ({ props }) => {
  return (
    <section className='filter-grid' id='drinks'>
      {props ? (
        props?.map((drink) => {
          console.log(drink.strDrink, drink.idDrink);
          <div className='filter' key={drink.idDrink}>
            <p>{drink.strDrink}</p>
            <img src={drink.strDrinkThumb} alt='a picture of the drink' />
          </div>;
        })
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default DrinkTile;
