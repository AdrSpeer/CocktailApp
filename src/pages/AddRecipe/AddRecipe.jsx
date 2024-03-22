import Footer from "../../components/Footer/Footer";
import "./AddRecipe.css";
import { useState, useEffect } from "react";

const AddRecipe = () => {
  const [newCocktail, setNewCocktail] = useState([]);
  const [cocktailConstructor, setCocktailConstructor] = useState({});

  useEffect(() => {
    const storedCocktails = JSON.parse(localStorage.getItem("newCocktail"));
    if (storedCocktails) {
      setNewCocktail(storedCocktails);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("newCocktail", JSON.stringify(newCocktail));
  }, [newCocktail]);

  const storeInputData = (event) => {
    event.preventDefault();

    // Füge das neue Cocktail-Objekt zum State hinzu
    setNewCocktail([...newCocktail, cocktailConstructor]);

    // Leere die Eingabefelder
    document
      .querySelectorAll("form input, form textarea, form select")
      .forEach((element) => {
        element.value = "";
      });
    window.alert("Es wurde ein neues Rezept hinzugefügt");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCocktailConstructor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(newCocktail);
  return (
    <div className="add-recipe-wrapper">
      <h3>Füge deine eigenen Getränke hinzu! </h3>
      <section className="add-recipe">
        <form className="form-recipe">
          <input
            placeholder="Name"
            name="name"
            type="text"
            required
            onChange={handleInputChange}
          />
          <select required name="category" onChange={handleInputChange}>
            <option value="">Wähle eine Kategorie</option>
            <option value="Gin">Gin</option>
            <option value="Vodka">Vodka</option>
            <option value="Rum">Rum</option>
            <option value="Scotch">Scotch</option>
            <option value="Whiskey">Whiskey</option>
            <option value="Tequilla">Tequilla</option>
            <option value="Alkoholfrei">Alkoholfrei</option>
          </select>
          <input
            type="text"
            placeholder="Bild URL"
            name="URL"
            onChange={handleInputChange}
          />
          <textarea
            name="anleitung"
            id="anleitung"
            placeholder="Anleitung"
            cols="30"
            rows="10"
            required
            onChange={handleInputChange}
          ></textarea>
          <input
            type="text"
            placeholder="Zutat 1"
            required
            onChange={handleInputChange}
            name="Zutat1"
          />
          <input
            type="text"
            placeholder="Menge Zutat 1"
            required
            onChange={handleInputChange}
            name="Menge1"
          />
          <input
            type="text"
            placeholder="Zutat 2"
            onChange={handleInputChange}
            name="Zutat2"
          />
          <input
            type="text"
            placeholder="Menge Zutat 2"
            onChange={handleInputChange}
            name="Menge2"
          />
          <input
            type="text"
            placeholder="Zutat 3"
            onChange={handleInputChange}
            name="Zutat3"
          />
          <input
            type="text"
            placeholder="Menge Zutat 3"
            onChange={handleInputChange}
            name="Menge3"
          />
          <button onClick={storeInputData}>Submit</button>
        </form>
        <img src="/svg/cover.svg" alt="Drinks" />
      </section>
      <Footer />
    </div>
  );
};

export default AddRecipe;
