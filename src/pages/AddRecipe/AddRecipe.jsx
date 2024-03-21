import Footer from "../../components/Footer/Footer";
import "./AddRecipe.css";

const AddRecipe = () => {
  return (
    <div className="add-recipe-wrapper">
      <h3>Füge deine eigenen Getränke hinzu! </h3>
      <section className="add-recipe">
        <form>
          <input placeholder="Name" type="text" required />
          <select required name="category">
            <option value="">Wähle eine Kategorie</option>
            <option value="Gin">Gin</option>
            <option value="Vodka">Vodka</option>
            <option value="Rum">Rum</option>
            <option value="Scotch">Scotch</option>
            <option value="Alkoholfrei">Alkoholfrei</option>
          </select>
          <input type="text" placeholder="Bild URL" />
          <textarea
            name="anleitung"
            id="anleitung"
            placeholder="Anleitung"
            cols="30"
            rows="10"
            required
          ></textarea>
          <input type="text" placeholder="Zutat 1" required />
          <input type="text" placeholder="Menge Zutat 1" required />
          <input type="text" placeholder="Zutat 2" />
          <input type="text" placeholder="Menge Zutat 2" />
          <input type="text" placeholder="Zutat 3" />
          <input type="text" placeholder="Menge Zutat 3" />
          <button>Submit</button>
        </form>
        <img src="../../../public/svg/cover.svg" alt="Drinks" />
      </section>
      <Footer />
    </div>
  );
};

export default AddRecipe;
