import React from "react";
import s from  './Card.module.css'
import {Link } from 'react-router-dom'

export default function Card(props) {
  return (<div className={s.card} >
     <img src={props.imageLink} alt=""/>
      <div>
        {props.name}

      </div>
      <div>
        {props.genre}
      </div>
        <Link to={'/gamedetail/'+props.id} style={{ textDecoration: 'none' }} >
        <button className={s.btn}>More Info</button>
      </Link>
  </div>)
}
