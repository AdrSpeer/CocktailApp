import Footer from "../../components/Footer/Footer";
import "./AddRecipe.css";
import { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DeleteIcon from "@mui/icons-material/Delete";

const AddRecipe = () => {
  const storedCocktail = JSON.parse(localStorage.getItem("newCocktail"));
  const [cocktailConstructor, setCocktailConstructor] = useState({});
  const [newCocktail, setNewCocktail] = useState(storedCocktail);
  const [hide, setHide] = useState(true);
  const [hideRecipe, setHideRecipe] = useState(true);
  const [newId, setNewId] = useState(1);

  useEffect(() => {
    localStorage.setItem("newCocktail", JSON.stringify(newCocktail));
  }, [newCocktail]);

  const storeInputData = (event) => {
    event.preventDefault();
    // Auslesen der Inputfelder beim Klicken des Submit-Buttons
    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const URL = document.getElementById("URL").value;
    const anleitung = document.getElementById("anleitung").value;
    const Zutat1 = document.getElementById("Zutat1").value;
    const Menge1 = document.getElementById("Menge1").value;
    const Zutat2 = document.getElementById("Zutat2").value;
    const Menge2 = document.getElementById("Menge2").value;
    const Zutat3 = document.getElementById("Zutat3").value;
    const Menge3 = document.getElementById("Menge3").value;
    if (name.length === 0) {
      window.alert("Bitte einen Namen einfügen");
      return;
    } else if (category.length === 0) {
      window.alert("Bitte eine Kategorie auswählen");
      return;
    } else if (anleitung.length === 0) {
      window.alert("Bitte eine Anleitung einfügen");
      return;
    } else if (Zutat1.length === 0) {
      window.alert("Bitte mindestens eine Zutat angeben");
      return;
    } else if (Menge1.length === 0) {
      window.alert("Bitte mindestens eine Menge angeben");
      return;
    }

    // Füge das neue Cocktail-Objekt zum State hinzu
    setNewCocktail([
      ...newCocktail,
      {
        id: newId,
        name,
        category,
        URL,
        anleitung,
        Zutat1,
        Menge1,
        Zutat2,
        Menge2,
        Zutat3,
        Menge3,
      },
    ]);

    // Leere die Eingabefelder
    document
      .querySelectorAll("form input, form textarea, form select")
      .forEach((element) => {
        element.value = "";
      });
    setCocktailConstructor({});
    window.alert("Es wurde ein neues Rezept hinzugefügt");
    setNewId(newId + 1);
  };

  const deleteStorageItem = (itemToDelete) => {
    console.log("item to delete", itemToDelete);
    console.log("stored cocktails", storedCocktail);

    const updatedLocalStorage = [...newCocktail].filter((cocktail) => {
      return cocktail.id !== parseInt(itemToDelete.id);
    });
    console.log("updated", updatedLocalStorage);

    localStorage.setItem("newCocktail", JSON.stringify(updatedLocalStorage));
    setNewCocktail(updatedLocalStorage);
  };

  console.log("new Cocktail", newCocktail);
  return (
    <div className="add-recipe-wrapper">
      <h3>Füge deine eigenen Getränke hinzu! </h3>
      <div className="show-form">
        <h4>Neues Rezept hinzufügen</h4>
        {hide ? (
          <ExpandLessIcon
            style={{ color: "white" }}
            onClick={() => setHide(false)}
          />
        ) : (
          <ExpandMoreIcon
            style={{ color: "white" }}
            onClick={() => setHide(true)}
          />
        )}
      </div>
      <section className="add-recipe">
        <form className={hide ? "form-recipe" : "hide-form"}>
          <input placeholder="Name" id="name" type="text" required />
          <select required id="category">
            <option value="">Wähle eine Kategorie</option>
            <option value="Gin">Gin</option>
            <option value="Vodka">Vodka</option>
            <option value="Rum">Rum</option>
            <option value="Scotch">Scotch</option>
            <option value="Whiskey">Whiskey</option>
            <option value="Tequilla">Tequilla</option>
            <option value="Alkoholfrei">Alkoholfrei</option>
          </select>
          <input type="text" placeholder="Bild URL" id="URL" />
          <textarea
            id="anleitung"
            placeholder="Anleitung"
            cols="30"
            rows="10"
            required
          ></textarea>
          <input type="text" placeholder="Zutat 1" required id="Zutat1" />
          <input type="text" placeholder="Menge Zutat 1" required id="Menge1" />
          <input type="text" placeholder="Zutat 2" id="Zutat2" />
          <input type="text" placeholder="Menge Zutat 2" id="Menge2" />
          <input type="text" placeholder="Zutat 3" id="Zutat3" />
          <input type="text" placeholder="Menge Zutat 3" id="Menge3" />
          <button onClick={storeInputData}>Submit</button>
        </form>
        <img
          src="/svg/cover.png"
          alt="Drinks"
          className={hide ? "" : "img-center"}
        />
      </section>
      <div className="show-recipe">
        <h2>Deine Rezepte</h2>
        {hideRecipe ? (
          <ExpandLessIcon
            style={{ color: "white" }}
            onClick={() => setHideRecipe(false)}
          />
        ) : (
          <ExpandMoreIcon
            style={{ color: "white" }}
            onClick={() => setHideRecipe(true)}
          />
        )}
      </div>
      <div className={hideRecipe ? "added-new-recipe" : "hide-new-recipe"}>
        {newCocktail?.map((cocktail, id) => (
          <div key={id} className="recipe-box">
            <img src={cocktail.URL} alt={cocktail.name} />
            <h3>{cocktail.name}</h3>
            <DeleteIcon
              style={{ color: "white" }}
              onClick={() => {
                deleteStorageItem(cocktail);
              }}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AddRecipe;
