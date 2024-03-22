import './DrinkTile.css';

const DrinkTile = ({ props }) => {
  return (
    <section className='filter-grid' id='drinks'>
      {props ? (
        props?.map((drink) => (
          <div className='filter' key={drink.idDrink}>
            <h3>{drink.strDrink}</h3>
            <img src={drink.strDrinkThumb} alt='a picture of the drink' />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default DrinkTile;
