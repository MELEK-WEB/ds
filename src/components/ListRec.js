import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import { fetchRecipes } from "../recipes.service";
import { Link } from "react-router-dom";

export default function ListRec() {
  const [RecList, setRecList] = useState([]);
  
  useEffect(() => {
    fetchRecipes().then((data) => {
      setRecList(data);
    });
  }, []);

  return (
    <div>
            <Filter />

      <h1>1ère page</h1>

      {RecList.map((Rec) => {
        return <RecipeCard key={Rec?.id} recipe={Rec} />;
      })}

  
    </div>
  );
}

function RecipeCard({ recipe }) {
  const [showSteps, setShowSteps] = useState(false);

  function toggleSteps() {
    setShowSteps(!showSteps);
  }

  return (
    <div style={{ width: 400, height: 400, border: "1px solid black", marginLeft: 50 }}>
      <Link to={`/update/${recipe?.id}`}>Update</Link>
      <h5>{recipe?.title}</h5>
      <h5>{recipe?.category}</h5>
      <h5 style={{ cursor: "pointer" }} onClick={toggleSteps}>
        {showSteps ? "Hide steps" : "Show steps"}
      </h5>
      {showSteps && (
        <ul>
          {recipe?.steps?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
