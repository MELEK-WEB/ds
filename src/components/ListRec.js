import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import { fetchIngredients, fetchRecipes } from "../recipes.service";
import { Link } from "react-router-dom";

export default function ListRec() {
  const [RecList, setRecList] = useState([]);



  useEffect(() => {
     fetchRecipes().then((data)=>{
        setRecList(data)
     });
   
  }, []);


  if(RecList.length==0) {
    return <h4>Loading ..........</h4>
  }
  return (
    <div>
      <h1>1ère page</h1>

      {RecList.map((Rec) => {
        return <div key={Rec?.id} style={{width:400,height:400,border:"1px solid black",marginLeft:50}}>

<Link to={`/update/${Rec?.id}`}>Update</Link>

                <h5>{Rec?.title}</h5>
                <h5>{Rec?.category}</h5>
                <h5 style={{cursor:"pointer"}}> show steps</h5>
                 </div>;
      })}

      <Filter />
    </div>
  );
}
