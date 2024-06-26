import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext } from "./context/Context";
import { DrinkContext } from "./context/Context";
import { PopContext } from "./context/Context";
import Home from "./pages/Home/Home";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import TypesPage from "./pages/TypesPage/TypesPage";
import "./App.css";
import LoadingPage from "./pages/LoadingPage/LoadingPage";

function App() {
  const [theme, setTheme] = useState(true);
  const [pop, setPop] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 3500);
  }, []);

  console.log(loading);
  console.log(theme);

  return loading ? (
    <LoadingPage />
  ) : (
    <div className={theme ? "bg" : "bg-light"}>
      <div className={theme ? "wrapper" : "wrapper-light"}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <PopContext.Provider value={{ pop, setPop }}>
            <DrinkContext.Provider value={{ drinkId, setDrinkId }}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/add-recipe" element={<AddRecipe />} />
                  <Route path="/types/:type" element={<TypesPage />} />
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
