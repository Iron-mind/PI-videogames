import React, {useState}from "react";
import  './SearchBar.css'

export default function SearchBar() {
  const  [input, setInput] = useState("");
  const handleInputChange = function(e) {
    setInput( e.target.value);
  }

  const reqCountries=  (e)=>{
        e.preventDefault()

        setInput('')

  }
  return (
    <form className="input-wrapper" >

        <input className= "searc" onChange={handleInputChange} value={input}type="text" placeholder="Games"/>
        <input name='search' onClick={reqCountries}  type="submit" className="btn" value="Search" />


    </form>
  );
}
