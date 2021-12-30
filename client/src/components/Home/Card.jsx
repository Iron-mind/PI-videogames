import React from "react";
import s from  './Card.module.css'

export default function Card(props) {
  return (<div className={s.card} >
     <img src={props.imageLink} alt=""/>
      <div>
        {props.name}

      </div>
      <div>
        {props.genre}
      </div>
       <button className={s.btn}>More Info</button>
  </div>)
}
