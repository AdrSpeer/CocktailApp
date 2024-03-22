import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext } from "./context/Context";
import { DrinkContext } from "./context/Context";
import { PopContext } from "./context/Context";
import Home from "./pages/Home/Home";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import TypesPage from "./pages/TypesPage/TypesPage";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("");
  const [pop, setPop] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  return (
    <div className="bg">
      <div className="wrapper">
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <PopContext.Provider value={{ pop, setPop }}>
            <DrinkContext.Provider value={{ drinkId, setDrinkId }}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/add-recipe" element={<AddRecipe />} />
                  <Route path="/types/:type" element={<TypesPage />} />
                  <Route path="/types" element={<TypesPage />} />
                </Routes>
              </BrowserRouter>
            </DrinkContext.Provider>
          </PopContext.Provider>
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
