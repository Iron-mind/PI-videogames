import React, {useState,useEffect}from "react";
import Cards from "./Cards.jsx";
import {useSelector, useDispatch}  from 'react-redux'

import {getGames}  from '../../actions/index.js'

//logic Pagination
export default function Pagination() {
  const games = useSelector((state) => state.games);
  const [currentItems , setcurrentItems]= useState([])
  const useFetching = (someFetchActionCreator) => {
     const dispatch = useDispatch()

     useEffect(() => {
       //{order:"rating",orderBy:"desc"}
     dispatch(someFetchActionCreator({}));

   }, [])
 }
 useFetching(getGames)

useEffect(()=>{
if (games.length>99) {
     setcurrentItems(games.slice(0,15))
  //
   }


},[games])





  return (<div>
     <Cards items={currentItems}/>
  </div>)
}
