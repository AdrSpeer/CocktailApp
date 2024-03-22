import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './TypesPage.css';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const TypesPage = () => {
  const [allDrinks, setAllDrinks] = useState();
  const { type } = useParams();

  useEffect(() => {
    type !== 'non-alcoholic'
      ? fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${type}`
        )
          .then((response) => response.json())
          .then((fetchedData) => setAllDrinks(fetchedData.drinks))
          .catch((error) => console.error('Error auf der Details Page', error))
      : fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
        )
          .then((response) => response.json())
          .then((fetchedData) => setAllDrinks(fetchedData.drinks))
          .catch((error) => console.error('Error auf der Details Page', error));
  }, [type]);

  return (
    <>
      <Header />
      <section className='filter-grid' id='drinks'>
        {allDrinks ? (
          allDrinks?.map((drink) => {
            console.log(drink.strDrink, drink.idDrink);
            <div className='filter background-1' key={drink.idDrink}>
              <p>{drink.strDrink}</p>
              <img src={drink.strDrinkThumb} alt='a picture of the drink' />
            </div>;
          })
        ) : (
          <p>Loading...</p>
        )}
        <ErrorBoundary></ErrorBoundary>
      </section>
      <Footer />
    </>
  );
};

export default TypesPage;

// {
//   allDrinks ? (
//     allDrinks?.map((item) => {
//       <div className='filter' key={item.idDrink}>
//         <h2>{item.strDrink}</h2>
//         <img src={item.strDrinkThumb} alt='a picture of the drink' />
//       </div>;
//     })
//   ) : (
//     <p>Loading...</p>
//   );
// }
