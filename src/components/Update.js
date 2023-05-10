import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchIngredients, fetchRecipeById } from "../recipes.service";

export default function Update() {
  const { id } = useParams();
  const [Recipe, setRecipe] = useState(null);
  useEffect(() => {
    fetchRecipeById(id).then((d) => {
      setRecipe(d);
    });
  }, []);

  function getNameswithrecip(ingredients, recip) {
    fetchIngredients().then((r) => {

      console.log("r", r);
      
     r.map((ing)=>{
        recip.ingredients.map((recping,index)=>{
            if(recping.id===ing.id) {
                recip.ingredients[index].name=ing.name ;
            }
        });

      })
        console.log("recip",recip)

    });
  }

  if (Recipe == null) {
    return <h1>Loading .... </h1>;
  }

  return (
    <div>
      <h6>Title : {Recipe?.title}</h6>
      <h6>Category : {Recipe?.category} </h6>
      <ul>
        {Recipe?.ingredients.map((ing) => {
          return (
            <>
              <li>
                {" "}
                <input type="text" value={ing?.quantity} /> <label></label>{" "}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
