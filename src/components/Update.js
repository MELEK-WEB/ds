import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchIngredients, fetchRecipeById } from "../recipes.service";

export default function Update() {
  const { id } = useParams();
  const [Recipe, setRecipe] = useState(null);
  const [NouvIngreList, setNouvIngreList] = useState([])
  useEffect(() => {
    fetchRecipeById(id).then((d) => {
        getNameswithrecip(d)
      setRecipe(d);
    });
  }, []);

  function getNameswithrecip( recip) {

    
    fetchIngredients().then((r) => {

      console.log("r", r);
      

      const filteredIngredients = r.filter(
        (ing) => !recip.ingredients.some((recping) => recping.id === ing.id)
      );
      console.log("filteredIngredients", filteredIngredients);
      setNouvIngreList(filteredIngredients);


     r.map((ing)=>{
        recip?.ingredients?.map((recping,index)=>{
            if(recping.id===ing.id) {
                recip.ingredients[index].name=ing.name ;
            }
        });

      })
      setRecipe(recip);

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
        {Recipe?.ingredients?.map((ing) => {
          return (
            <>
              <li>
                {" "}
                <input type="text" value={ing?.quantity} /> <label>{ing?.name}</label>{" "}
              </li>
            </>
          );
        })}
      </ul>
Noubll ingredients : 
  <select>
      {NouvIngreList.map((ingredient) => (
        <option key={ingredient.id} value={ingredient.id}>
          {ingredient.name}
        </option>
      ))}
    </select>
    <button>Add</button>
    </div>
  );
}
