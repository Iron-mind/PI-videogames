import React, {useState} from "react";
import {useDispatch}  from 'react-redux'
import {getGames}  from ''

//filtering options
export default function Options() {
 const [filteringInput , setfilteringInput]= useState({
   alph:"none",
   rating:"none",
   genre:"none",
   type:"none"
 })
 const dispatch = useDispatch()

  function handlerInput(e) {
    setfilteringInput({
      ...filteringInput,
      [e.target.name]:e.target.value
    })


  }

  return (<div className="left-bar">
     <section>
       <label htmlFor='alph'>Alphabetical order</label>
       <select onChange={handlerInput} value={filteringInput.aplh}name='alph'>
         <option  default value='none' >Select</option>

         <option  value='desc' >A to Z</option>
         <option  value='asc' >Z to A</option>
       </select>
     </section>
     <section>
       <label htmlFor='rating'>Rating order</label>
       <select  onChange={handlerInput} value={filteringInput.rating}name='rating'>
         <option  disabled value='none' >Select</option>
         <option  value='desc' >High to low</option>
         <option  value='asc' >Low to high</option>
       </select>
     </section>

     <section>
       <label htmlFor='genre'>Genre filter</label>
       <select onChange={handlerInput} value={filteringInput.genre}name='genre'>
         <option  disabled value='none' >Select</option>
         <option  value='desc' >High to low</option>
         <option  value='asc' >Low to high</option>
       </select>
     </section>

     <section>
       <label htmlFor='type'>VideoGame type filter</label>
       <select onChange={handlerInput} value={filteringInput.type}name='type'>
         <option  disabled value='none' >Select</option>
         <option  value='desc' >High to low</option>
         <option  value='asc' >Low to high</option>
       </select>
     </section>
  </div>)
}
