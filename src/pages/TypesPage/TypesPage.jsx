import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './TypesPage.css';

const TypesPage = () => {
  const [allDrinks, setAllDrinks] = useState();
  const { type } = useParams();

  useEffect(() => {
    type !== 'non-alcoholic'
      ? fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${type}`
        )
          .then((response) => response.json())
          .then((fetchedData) => setAllDrinks(fetchedData))
          .catch((error) => console.error('Error auf der Details Page', error))
      : fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
        )
          .then((response) => response.json())
          .then((fetchedData) => setAllDrinks(fetchedData))
          .catch((error) => console.error('Error auf der Details Page', error));
  }, [type]);

  console.log(allDrinks);

  return (
    <>
      <Header />
      <section className='filter-grid' id='jump'>
        <div className='filter background-1'>
          <h2>Gin</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <img src='../../../public/svg/Gin.jpg' alt='' />
        </div>
        <div className='filter background-2'>
          <h2>Vodka</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <img src='../../../public/svg/vodka.jpg' alt='' />
        </div>
        <div className='filter background-1'>
          <h2>Gin</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <img src='../../../public/svg/Gin.jpg' alt='' />
        </div>
        <div className='filter background-2'>
          <h2>Vodka</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <img src='../../../public/svg/vodka.jpg' alt='' />
        </div>
        <div className='filter background-1'>
          <h2>Gin</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <img src='../../../public/svg/Gin.jpg' alt='' />
        </div>
        <div className='filter background-2'>
          <h2>Vodka</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <img src='../../../public/svg/vodka.jpg' alt='' />
        </div>
        <div className='filter background-1'>
          <h2>Gin</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <img src='../../../public/svg/Gin.jpg' alt='' />
        </div>
        <div className='filter background-2'>
          <h2>Vodka</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <img src='../../../public/svg/vodka.jpg' alt='' />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TypesPage;
