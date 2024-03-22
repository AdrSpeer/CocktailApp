import Footer from '../../components/Footer/Footer';
import './AddRecipe.css';
import { useState, useEffect } from 'react';

const AddRecipe = () => {
  const storedCocktail = JSON.parse(localStorage.getItem('newCocktail'));
  const [cocktailConstructor, setCocktailConstructor] = useState({});
  const [newCocktail, setNewCocktail] = useState(storedCocktail);

  useEffect(() => {
    localStorage.setItem('newCocktail', JSON.stringify(newCocktail));
  }, [newCocktail]);

  const storeInputData = () => {
    event.preventDefault();
    setNewCocktail((cocktailInput) => [...cocktailInput, cocktailConstructor]);
    setCocktailConstructor({});
  };

  console.log(storedCocktail);

  return (
    <div className='add-recipe-wrapper'>
      <h3>Füge deine eigenen Getränke hinzu! </h3>
      <section className='add-recipe'>
        <form className='form-recipe'>
          <input
            placeholder='Name'
            type='text'
            required
            onChange={(e) => {
              setCocktailConstructor((prev) => ({
                ...prev,
                name: e.target.value,
              }));
            }}
          />
          <select
            required
            name='category'
            onClick={(e) =>
              setCocktailConstructor((prev) => ({
                ...prev,
                category: e.target.value,
              }))
            }
          >
            <option value=''>Wähle eine Kategorie</option>
            <option value='Gin'>Gin</option>
            <option value='Vodka'>Vodka</option>
            <option value='Rum'>Rum</option>
            <option value='Scotch'>Scotch</option>
            <option value='Alkoholfrei'>Alkoholfrei</option>
          </select>
          <input
            type='text'
            placeholder='Bild URL'
            onChange={(e) =>
              setCocktailConstructor((prev) => ({
                ...prev,
                imageURL: e.target.value,
              }))
            }
          />
          <textarea
            name='anleitung'
            id='anleitung'
            placeholder='Anleitung'
            cols='30'
            rows='10'
            required
            onChange={(e) =>
              setCocktailConstructor((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
          ></textarea>
          <input
            type='text'
            placeholder='Zutat 1'
            required
            onChange={(e) =>
              setCocktailConstructor((prev) => ({
                ...prev,
                ingredientOne: e.target.value,
              }))
            }
          />
          <input
            type='text'
            placeholder='Menge Zutat 1'
            required
            onChange={(e) =>
              setCocktailConstructor((prev) => ({
                ...prev,
                amountIngredientOne: e.target.value,
              }))
            }
          />
          <input
            type='text'
            placeholder='Zutat 2'
            onChange={(e) =>
              setCocktailConstructor((prev) => ({
                ...prev,
                ingredientTwo: e.target.value,
              }))
            }
          />
          <input
            type='text'
            placeholder='Menge Zutat 2'
            onChange={(e) =>
              setCocktailConstructor((prev) => ({
                ...prev,
                amountIngredientTwo: e.target.value,
              }))
            }
          />
          <input
            type='text'
            placeholder='Zutat 3'
            onChange={(e) =>
              setCocktailConstructor((prev) => ({
                ...prev,
                ingredientThree: e.target.value,
              }))
            }
          />
          <input
            type='text'
            placeholder='Menge Zutat 3'
            onChange={(e) =>
              setCocktailConstructor((prev) => ({
                ...prev,
                amountIngredientThree: e.target.value,
              }))
            }
          />
          <button onClick={() => storeInputData()}>Submit</button>
        </form>
        <img src='/svg/cover.svg' alt='Drinks' />
      </section>
      <Footer />
    </div>
  );
};

export default AddRecipe;
