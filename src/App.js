import { useState } from "react";
import "./App.css";
import Axios from "axios";
import RecipeBox from "./RecipeBox";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const YOUR_APP_KEY = `08d863c3acfd6b4ca002beaa20ce5913`;
  const YOUR_APP_ID = `872352b0`;
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  const recipe = async () => {
    const recipe = await Axios.get(url);
    setRecipes(recipe.data.hits);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    recipe();
  };
  return (
    <div className="app">
      <h1>🍹Food Recipe Plaza 🍔</h1>
      <form className="app_form" onSubmit={onSubmit}>
        <input
          className="app_input"
          type="text"
          placeholder="Enter Ingredients"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="app_submit" type="submit" value="Search" />
      </form>
      <div className="app_recipebox">
      {recipes !== [] &&
        recipes.map((recipe) => {
          return <RecipeBox recipe={recipe} />;
        })}
        </div>
    </div>
  );
}

export default App;
