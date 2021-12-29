import React from "react";
import SearchBar from "./SearchBar";
import control from './gamecontrol.png'
import './Nav.css'

export default function Nav() {
  return (

      <nav className="navbar">
        <div className='left-nav'>
        <img id="controlIcon" src={control} width="30" height="30"  alt="" />
        <h2 className='title-header'>Play, enjoy and live</h2>

        </div>
        <SearchBar />
      </nav>

)
  }
