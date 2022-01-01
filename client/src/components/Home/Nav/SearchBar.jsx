import React, {useState}from "react";
import {useDispatch}  from 'react-redux'

import  './SearchBar.css'
import {searchGame}  from '../../../actions/index'

export default function SearchBar() {
  const  [input, setInput] = useState("");
  let dispatch = useDispatch()

  const handleInputChange = function(e) {
    setInput( e.target.value);
  }

  const reqGames=  (e)=>{
        e.preventDefault()
        dispatch(searchGame(input))
        setInput('')

  }
  return (
    <form className="input-wrapper" >

        <input className= "searc" onChange={handleInputChange} value={input}type="text" placeholder="Games"/>
        <input name='search' onClick={reqGames}  type="submit" className="btn" value="Search" />


    </form>
  );
}
