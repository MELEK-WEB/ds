import React, { useEffect, useState } from 'react'
import { fetchCategories } from '../recipes.service'

export default function Filter({ onFilter }) {

  const [titleFilter, setTitleFilter] = useState('')
  const [categoryList, setCategoryList] = useState([])
 const [ selectedCategory,setSelectedCategory]=useState('')


  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  }
  useEffect(()=>{
    fetchCategories().then((r)=>{
      setCategoryList(r);
      console.log("categorys",r)
    })
  },[])


  const handleSearch = () => {
    onFilter(titleFilter, selectedCategory);
  };

  const handletitleChange = (e) => {
    setTitleFilter(e.target.value);
  
  };
  return (
    <div>
    Title :  <input type='text' value={titleFilter} onChange={handletitleChange} />
    Category :
    <select value={selectedCategory} onChange={handleChange}>
      {categoryList?.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
     <button style={{width:100,height:20}} onClick={handleSearch}>SEARCH</button>
  </div>
    
  )
}
