import React from "react";
import "./RecipeBox.css";
import DisplayHealthLabels from "./DisplayHealthLabels";

const RecipeBox = ({ recipe }) => {
  const healthLabels = recipe.recipe.healthLabels;
  const url=recipe.recipe.url;
  return (
    <div className="recipe_box" onClick={()=> window.open(url)}>
      <div className="upper_box">
        <div className="left">
          <img
            className="recipe_img"
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
          />
        </div>
        <div className="right">
          <p className="recipe_name">{recipe.recipe.label}</p>
          <div className="display_healthLabels">
            {healthLabels.map((item) => {
              return <DisplayHealthLabels item={item} />;
            })}
          </div>
        </div>
      </div>
      <div className="lower_box">
        <div className="l_left">
          <p className="servings">{Math.round(recipe.recipe.yield)} Servings</p>
          <p className="calories">
            {Math.round(recipe.recipe.calories)}{" "}
            <span className="kCal">kCal</span>
          </p>
        </div>
        <div className="l_mid">
          <p>
            🔴PROTEIN -{" "}
            {recipe.recipe.digest.map((item) => {
              return (
                <>{item.tag === "PROCNT" && <>{Math.round(item.daily)}</>} </>
              );
            })}
            g
          </p>
          <p>
            🟡FAT -{" "}
            {recipe.recipe.digest.map((item) => {
              return (
                <>{item.tag === "FAT" && <>{Math.round(item.daily)}</>} </>
              );
            })}
            g
          </p>
          <p>
            🟢CARB -{" "}
            {recipe.recipe.digest.map((item) => {
              return (
                <>{item.tag === "CHOCDF" && <>{Math.round(item.daily)}</>} </>
              );
            })}
            g
          </p>
        </div>
        <div className="l_right">
        <p>
        Cholesterol -{" "}
        {recipe.recipe.digest.map((item) => {
              return (
                <>{item.tag === "CHOLE" && <>{Math.round(item.daily)}</>} </>
              );
            })}
        mg
      </p>
      <p>
        Sodium - {recipe.recipe.digest.map((item) => {
              return (
                <>{item.tag === "NA" && <>{Math.round(item.daily)}</>} </>
              );
            })} mg
      </p>
      <p>
        Calcium - {recipe.recipe.digest.map((item) => {
              return (
                <>{item.tag === "CA" && <>{Math.round(item.daily)}</>} </>
              );
            })} mg
      </p>
      <p>
        Magnesium - {recipe.recipe.digest.map((item) => {
              return (
                <>{item.tag === "MG" && <>{Math.round(item.daily)}</>} </>
              );
            })}
        mg
      </p>
      <p>
        Potassium - {recipe.recipe.digest.map((item) => {
              return (
                <>{item.tag === "K" && <>{Math.round(item.daily)}</>} </>
              );
            })}
        mg
      </p>
      <p>
        Iron - {recipe.recipe.digest.map((item) => {
              return (
                <>{item.tag === "FE" && <>{Math.round(item.daily)}</>} </>
              );
            })} mg
      </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeBox;
