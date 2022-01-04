import React, {useState,  useEffect } from "react";


import Card from "./Card.jsx";

export default function Cards({items}) {
  const [message , setmessage]= useState('Loading...')


 useEffect(()=>{
   setTimeout(()=>{
     if (items.length === 0 ) {
       setmessage('Not found')

     }
   }, 5000)
 },[items])


  return (
    <React.Fragment>
      {
        items.length > 0 ? (
        items.map((c) => {
          return <Card
            name={c.name}
            key={c.id}
            genre= {c.genres[0]?c.genres[0].name:'Unknown'}
            imageLink={c.background_image}
            id={c.id}
            rating= {c.rating}
            />;
        })
      ) : (
        <div>{message}</div>
      )}
    </React.Fragment>
  );
}
