import Footer from "../../components/Footer/Footer";
import "./AddRecipe.css";
import { useContext, useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DeleteIcon from "@mui/icons-material/Delete";
import Nav from "../../components/Nav/Nav";
import { ThemeContext } from "../../context/Context";

const AddRecipe = () => {
  const { theme } = useContext(ThemeContext);
  // storedCocktail abfragen, sind daten vorhanden? Nein, dann leeres Array
  let storedCocktail = JSON.parse(localStorage.getItem("newCocktail"));
  const [cocktailConstructor, setCocktailConstructor] = useState({});
  const [newCocktail, setNewCocktail] = useState([]);
  const [hide, setHide] = useState(true);
  const [hideRecipe, setHideRecipe] = useState(true);
  const [newId, setNewId] = useState();
  // const [showPopUp, setShowPopUp] = useState(false);
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  // Searchbar
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [placeholderVisible, setPlaceholderVisible] = useState(true);
  // -------------------------------------------------------
  const recipeAlert = document.getElementById("alert-red");

  const recipeAlertGreen = document.getElementById("alert-green");

  const textNodeNameInput = document.createTextNode("Bitte einen Namen einfügen!");
  const textNodeCategoryInput = document.createTextNode("Bitte eine Kategorie auswählen!");
  const textNodeDescriptionInput = document.createTextNode("Bitte eine Anleitung einfügen!");
  const textNodeIngredientInput = document.createTextNode("Bitte mindestens eine Zutat angeben!");
  const textNodeAmountInput = document.createTextNode("Bitte mindestens eine Menge angeben!");
  const textNodeRecipeInput = document.createTextNode("Es wurde ein neues Rezept hinzugefügt!");
  // -------------------------------------------------------
  console.log("stored Cocktail", storedCocktail);
  console.log("newCocktail", newCocktail);
  useEffect(() => {
    if (storedCocktail?.length > 0) setNewCocktail(storedCocktail);
  }, []);

  useEffect(() => {
    localStorage.setItem("newCocktail", JSON.stringify(newCocktail));
  }, [newCocktail]);

  const storeInputData = (event) => {
    event.preventDefault();
    // Auslesen der Inputfelder beim Klicken des Submit-Buttons
    const name = document.getElementById("nameDrink").value;
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
      recipeAlert.textContent = "";
      recipeAlert.appendChild(textNodeNameInput);
      return;
    } else if (category.length === 0) {
      recipeAlert.textContent = "";
      recipeAlert.appendChild(textNodeCategoryInput);
      return;
    } else if (anleitung.length === 0) {
      recipeAlert.textContent = "";
      recipeAlert.appendChild(textNodeDescriptionInput);
      return;
    } else if (Zutat1.length === 0) {
      recipeAlert.textContent = "";
      recipeAlert.appendChild(textNodeIngredientInput);
      return;
    } else if (Menge1.length === 0) {
      recipeAlert.textContent = "";
      recipeAlert.appendChild(textNodeAmountInput);
      return;
    }

    // Füge das neue Cocktail-Objekt zum State hinzu
    setNewCocktail([
      ...newCocktail,

      {
        id: new Date(),
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
    document.querySelectorAll("form input, form textarea, form select").forEach((element) => {
      element.value = "";
    });
    // setCocktailConstructor({});

    recipeAlert.textContent = "";
    recipeAlertGreen.textContent = "";
    recipeAlertGreen.appendChild(textNodeRecipeInput);
    // setNewId(newId + 1);
  };

  const deleteStorageItem = (itemToDelete) => {
    console.log("item to delete", itemToDelete);
    console.log("stored cocktails", storedCocktail);

    const updatedLocalStorage = [...newCocktail].filter((cocktail) => {
      return String(cocktail?.id) !== String(itemToDelete?.id);
    });
    console.log("updated", updatedLocalStorage);

    localStorage.setItem("newCocktail", JSON.stringify(updatedLocalStorage));
    setNewCocktail(updatedLocalStorage);
  };

  //   Placeholder onFocus leeren/füllen
  const handleFocus = () => {
    setPlaceholderVisible(false);
  };

  const handleBlur = () => {
    setPlaceholderVisible(true);
  };

  // Suche aller Drinks
  const searchAll = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Filtere die Daten basierend auf dem Suchbegriff
    const filteredData = newCocktail.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));

    // Setze die gefilterten Daten in den State
    setFilteredData(filteredData);
  };

  // Verwende entweder newCocktail oder filteredData zum Rendern der Drinks
  // #1 changes new Cocktail
  const drinksToRender = searchInput ? filteredData : newCocktail;

  console.log("new Cocktail", newCocktail);
  return (
    <div className="home-loader">
      <Nav />
      <div className="add-recipe-wrapper">
        <h3>Füge deine eigenen Getränke hinzu! </h3>
        <div className="show-form">
          <h4>Neues Rezept hinzufügen</h4>
          {hide ? <ExpandLessIcon style={theme ? { color: "#ffe3e8" } : { color: "black" }} onClick={() => setHide(false)} /> : <ExpandMoreIcon style={theme ? { color: "#ffe3e8" } : { color: "black" }} onClick={() => setHide(true)} />}
        </div>
        <section className="add-recipe">
          <article className="form-wrapper">
            <form className={hide ? "form-recipe" : "hide-form"}>
              <input placeholder="Name" id="nameDrink" type="text" required />
              <select required id="category">
                <option value="">Wähle eine Kategorie</option>
                <option value="Gin">Gin</option>
                <option value="Vodka">Vodka</option>
                <option value="Rum">Rum</option>
                <option value="Scotch">Scotch</option>
                <option value="Bourbon">Bourbon</option>
                <option value="Tequilla">Tequilla</option>
                <option value="Alkoholfrei">Alkoholfrei</option>
              </select>
              <input type="text" placeholder="Bild URL" id="URL" />
              <textarea id="anleitung" placeholder="Anleitung" cols="30" rows="10" required></textarea>
              <input type="text" placeholder="Zutat 1" required id="Zutat1" />
              <input type="text" placeholder="Menge Zutat 1" required id="Menge1" />
              <input type="text" placeholder="Zutat 2" id="Zutat2" />
              <input type="text" placeholder="Menge Zutat 2" id="Menge2" />
              <input type="text" placeholder="Zutat 3" id="Zutat3" />
              <input type="text" placeholder="Menge Zutat 3" id="Menge3" />
              <button onClick={storeInputData}>Submit</button>
            </form>
            <p id="alert-red"></p>
            <p id="alert-green"></p>
          </article>
          <img src="/svg/cover.png" alt="Drinks" className={hide ? "img-desk" : "img-center"} />
        </section>
        <div className="show-recipe">
          <div className="show-recipe-headline">
            <h4>Deine Rezepte</h4>
            {hideRecipe ? <ExpandLessIcon style={theme ? { color: "#ffe3e8" } : { color: "black" }} onClick={() => setHideRecipe(false)} /> : <ExpandMoreIcon style={theme ? { color: "#ffe3e8" } : { color: "black" }} onClick={() => setHideRecipe(true)} />}
          </div>
          <input onChange={searchAll} value={searchInput} placeholder={placeholderVisible ? "Search..." : ""} type="text" onFocus={handleFocus} onBlur={handleBlur} name="searchbar" autoComplete="off" className={hideRecipe ? "input-show-add" : "hide-new-recipe"} />
        </div>

        <div className={hideRecipe ? "drink-grid-added" : "hide-new-recipe"}>
          {drinksToRender?.map((cocktail, id) => (
            <div key={id} className="added-drink-box">
              <article className="added-drink-head">
                <h4 style={{ color: "#ffe3e8" }}>{cocktail?.name} </h4>
                <DeleteIcon
                  style={{ color: "white" }}
                  onClick={() => {
                    deleteStorageItem(cocktail);
                  }}
                />
              </article>
              <img src={cocktail?.URL} alt={cocktail?.name} onClick={() => setSelectedCocktail(cocktail)} />
            </div>
          ))}
        </div>
        <div className="pop-add-wrapper">
          {selectedCocktail && (
            <div className="add-pop-up">
              <div className="pop-show pop">
                <div className="drink-div">
                  <img onClick={() => setSelectedCocktail(null)} className="back-cross" src="../../../public/svg/Cross.svg" alt="" />
                  <img className="drink-img" src={selectedCocktail?.URL} alt="" />
                  <div className="content-con">
                    <h6 className="pop-h4">{selectedCocktail?.name}</h6>
                    <h5 className="pop-h5">Zutaten</h5>
                    <p className="pop-p">
                      {selectedCocktail.Menge1} {selectedCocktail?.Zutat1}
                    </p>
                    <p className="pop-p">
                      {selectedCocktail.Menge2} {selectedCocktail.Zutat2}
                    </p>
                    <p className="pop-p">
                      {selectedCocktail.Menge3} {selectedCocktail.Zutat3}
                    </p>
                    <h5 className="pop-h5">Anleitung</h5>
                    <p className="pop-p">{selectedCocktail.anleitung}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddRecipe;
