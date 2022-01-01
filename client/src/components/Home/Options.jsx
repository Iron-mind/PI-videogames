import React, {useState, useEffect} from "react";
import {useDispatch, useSelector}  from 'react-redux'
import {setSearchInput,searchGame,getGames, getGenres,filterGames}  from '../../actions/index'

//filtering options
export default function Options() {
 const [filteringInput , setfilteringInput]= useState({
   alph:"none",
   rating:"none",
   genre:"none",
   type:"none"
 })



 let genres = useSelector(state => state.genres);
 let searchInput = useSelector(state => state.searchInput);
 const dispatch = useDispatch()

  function handlerInput(e) {


      setfilteringInput({
        genre:"none",
        type:"none",
        rating: e.target.name=="rating"?e.target.value:"none",
          alph:e.target.name=="alph"?e.target.value:"none",
      })
      let data ={
        order: e.target.name,
        orderBy: e.target.value
      }
      if (searchInput!=='') {
         dispatch(searchGame(searchInput, data))
      }else {
        dispatch(getGames(data))

      }

  }
  function handlerFilter(e) {
    setfilteringInput({
      ...filteringInput,
      type:e.target.name==="type"?e.target.value:"none",
      'genre':e.target.name==="genre"?e.target.value:"none"
    })


    let data ={
      filter: e.target.name,
      filterBy: e.target.value
    }
    dispatch(filterGames(data))

  }
  function resetInputs() {
    setfilteringInput({
      alph:"none",
      rating:"none",
      genre:"none",
      type:"none"
    })

    dispatch(setSearchInput(''))
    dispatch(getGames())

  }


   function useFetchingWhenMount(actionCreator) {
      useEffect(()=>{
         dispatch(actionCreator())
      }, [])
   }
   useFetchingWhenMount(getGenres)

  return (<div className="left-bar">
     <section>
       <label htmlFor='alph'>Alphabetical order </label>
       <select  onChange={handlerInput} value={filteringInput.alph}name='alph'>
         <option  disabled value='none' >Select</option>
         <option  value='ASC' >'A to Z'</option>
         <option  value='DESC' >'Z to A'</option>

       </select>

     </section>
     <section>
       <label htmlFor='rating'>Rating order </label>
       <select  onChange={handlerInput} value={filteringInput.rating}name='rating'>
         <option  disabled value='none' >Select</option>
         <option  value='DESC' >High to low</option>
         <option  value='ASC' >Low to high</option>
       </select>
     </section>

     <section>
       <label htmlFor='genre'>Genre filter </label>
       <select onChange={handlerFilter} value={filteringInput.genre}name='genre'>
         <option  disabled value='none' >Select</option>

           {genres.length>0?
            genres.map((g,index)=>{
              return <option key={index} value={g.name} >{g.name}</option>
            }):"Loading"
           }
       </select>
     </section>

     <section>
  <label htmlFor="type">VideoGame type filter </label>
  <select onChange={handlerFilter} value={filteringInput.type} name="type">
    <option disabled value="none">
      Select
    </option>
    <option value="added">Added</option>
    <option value="existing">Existing</option>
  </select>
</section>
     <button type="button" onClick={resetInputs} className='btn'>Reset</button>
  </div>)
}
