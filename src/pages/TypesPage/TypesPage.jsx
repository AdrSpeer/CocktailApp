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
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      type !== 'non-alcoholic'
        ? await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${type}`
          )
            .then((response) => response.json())
            .then((fetchedData) => setAllDrinks(fetchedData.drinks))
        : await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
          )
            .then((response) => response.json())
            .then((fetchedData) => setAllDrinks(fetchedData.drinks));
    } catch (error) {
      console.error('Error auf der Details Page', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  return (
    <>
      <Header />
      <ErrorBoundary>
        <DrinkTile props={allDrinks} loading={loading} />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default TypesPage;
