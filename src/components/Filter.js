import React, { useEffect, useState } from 'react'
import { fetchCategories } from '../recipes.service'

export default function Filter() {

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

  return (
    <div>
    Title :  <input type='text' value={titleFilter} onChange={(e) => setTitleFilter(e.target.value)} />
    Category :
    <select value={selectedCategory} onChange={handleChange}>
      {categoryList?.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
    
  </div>
    
  )
}
