import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './TypesPage.css';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import DrinkTile from '../../components/DrinkTile/DrinkTile';

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
      <ErrorBoundary>
        <DrinkTile props={allDrinks} />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default TypesPage;
