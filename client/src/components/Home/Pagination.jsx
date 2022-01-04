import React, {useState,useEffect}from "react";
import Cards from "./Cards.jsx";
import {useSelector, useDispatch, connect}  from 'react-redux'
import s from './Pagination.module.css'
import {getGames}  from '../../actions/index.js'

//logic Pagination
  function Pagination({games,getGames}) {
  const [currentItems , setcurrentItems]= useState([])
  const [currentPage , setcurrentPage]= useState(1)
  const [itemsPerPage , setitemsPerPage]= useState(15)


  const [pageNumberLimit , setpageNumberLimit]= useState(2)
  const [maxPageNumberLimit , setmaxPageNumberLimit]= useState(2)
  const [minPageNumberLimit , setminPageNumberLimit]= useState(0)
  let pages= []
  for (var i = 1; i <= Math.ceil(games.length/itemsPerPage); i++) {
    pages.push(i)
  }




 const indexOfLastItem = currentPage*itemsPerPage
 const indexOfFirsItem = indexOfLastItem-itemsPerPage


function handlerClick(e) {

  setcurrentPage(Number(e.target.id))

}

function btnPrev() {
  setcurrentPage(currentPage-1)

  if ((currentPage-1)%pageNumberLimit ===0) {
    setmaxPageNumberLimit(maxPageNumberLimit-pageNumberLimit)
   setminPageNumberLimit(minPageNumberLimit-pageNumberLimit)
  }

}
function btnNext() {

     setcurrentPage(currentPage+1)
     if (currentPage+1> maxPageNumberLimit) {
       setmaxPageNumberLimit(maxPageNumberLimit+pageNumberLimit)
      setminPageNumberLimit(minPageNumberLimit+pageNumberLimit)
     }

}
 useEffect(() => {
   async function fetchData() {
     // You can await here
     await getGames();
   }
   fetchData();
   }, [])


useEffect(()=>{

     if(currentPage>pages.length ){
       setcurrentPage(1)
     }
     setcurrentItems(games.slice(indexOfFirsItem,indexOfLastItem))
  //



},[games, currentPage])


let pageIncrement = null
if (pages.length>maxPageNumberLimit) {
    pageIncrement = <li onClick={btnNext}>
        ...
    </li>
}
let pageDecrement = null
if (currentPage > pageNumberLimit) {
    pageDecrement = <li onClick={btnPrev}>
        ...
    </li>
}



const renderPageNumbers = pages.map(number=>{
  if ( number < maxPageNumberLimit+1 && number >minPageNumberLimit) {
    return(

      <li
        onClick={handlerClick}
        className={s.pageNumber}
        key={number}
        id={number}
        className={number== currentPage? s.active:null}
        >
        {number}
      </li>
    )

  } else {
    return null
  }

})

let pagintationButtons = <ul className={s.pageNumbers}>
   {currentPage===1?null
   :
   <li
     onClick={btnPrev}
     className={s.btnPages}
     name='prev'>
     Prev
   </li>
 }


  {pageDecrement}

  {renderPageNumbers}

  {pageIncrement}
  {currentPage==pages.length ?null
    :
    <li
      onClick={btnNext}
      className={s.btnPages}
      name='next'
      >
      Next
    </li>
  }


</ul>

  return (<div className={s.cards}>
      {pages.length>0?pagintationButtons:null}
     <Cards items={currentItems}/>
  </div >)
}




const mapStateToProps = (state) => {
  return {
    games: state.games
  };
};
function mapDispatchToProps(dispatch) {
  return {
    getGames: (data) => dispatch(getGames(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
