import React from "react";
import s from  './Pagination.module.css'
import {Link } from 'react-router-dom'

export default function Card(props) {
  let styleCard = {
    color: 'black',
    display: "inline-flex",
     flexDirection: 'column',
     justifyContent: 'space-between',
    width: '240px',
    minHeight: '140px',
    borderRadius: '0.6rem',
    margin: '8px',
    //backgroundColor: '#e9eef3ef',
    boxShadow: '0.1rem 0.1rem 0.1rem #737a83ef',
    backgroundImage: 'url('+props.imageLink +')',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }


  return (
    <Link to={'/gamedetail/'+props.id} style={{ textDecoration: 'none' }} >

      <div className={s.card} style={styleCard} >
        <div className={s.cardTop}>
          <span className={s.genre}>
            {props.genre}

          </span>
          <span className={s.rating}>
            {props.rating}

          </span>
        </div>

         <h4 className={s.title}>{props.name}</h4>

      </div>
  </Link>)
}
