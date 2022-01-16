import React, {useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import {
  getPlatforms,
   getGenres,
   postGame
 } from '../../actions'
import {Link} from 'react-router-dom'
const s = require('./AddVideogame.module.css')

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = 'Name is required';
  }
  if (!input.rating) {
    errors.rating = 'Rating is required';

  } else if (Number(input.rating)>5|| Number(input.rating)< 1 || isNaN(Number(input.rating))) {
    errors.rating = 'Rating is invalid';

  }
  if (!input.released) {
    errors.released = 'Released is required';
  }
  if (!input.released) {
    errors.released = 'Released is required';
  }
  if (!input.description) {
    errors.description = 'description is required';
  }
  if(input.genres.length< 1){
    errors.genres= 'At least one gender'
  }
  if(input.platforms.length< 1){
    errors.platforms= 'At least one platform'
  }

  return errors;
}



export default function AddVideogame() {

  const [errors, seterrors] = useState({
    name: "",
    released: "",
    rating: "",
    description: "",
    genres:"",
    platforms:''
  });
  const [input, setInput] = useState({
    name: "",
    released: "",
    rating: "",
    description: "",
    genre:'select',
    platform:'select'

  });
  const [genres , setgenres]= useState([])
  const [ platforms, setplatforms]= useState([])

  const allGenres = useSelector((state)=>state.genres)
  const allPlatforms = useSelector((state)=>state.platforms)

  let dispatch = useDispatch()

  function useFetchingWhenMount(actionCreator) {
     useEffect(()=>{
        dispatch(actionCreator())
     }, [actionCreator])
  }
  useFetchingWhenMount(getGenres)
  useFetchingWhenMount(getPlatforms)

 const handleInputChange = function (e) {
  setInput({
    ...input,
    [e.target.name]: e.target.value,
  });
  seterrors(
    validate({
      ...input,
      genres,
      platforms,
      [e.target.name]: e.target.value,
    })
  );
  console.log(input);
};

 function handleSubmit(e) {
   e.preventDefault();
   if(Object.keys(errors).length==0){
     setInput({
       name: "",
       released: "",
       rating: "",
       description: '',
       background_image:''

     });
     setgenres([])
     setplatforms([])
     dispatch(postGame({status:'added', genres, platforms, ...input}))
     alert(" Game added")
   }
   return 0

 }
  function addGenre(e) {
    setgenres(Array.from(new Set([...genres, e.target.value])))
    seterrors(
      validate({
        ...input,
        genres,
        platforms,
        [e.target.name]: e.target.value,
      })
    );
  }
  function addPlatform(e) {
    setplatforms(Array.from(new Set([...platforms, e.target.value])))
    seterrors(
      validate({
        ...input,
        genres,
        platforms,
        [e.target.name]: e.target.value,
      })
    );
  }
 return (
     <div>
     <h1>Add VideoGame</h1>


     <form

       className={s.addGame}

       onSubmit={handleSubmit}
     >
     <div >

       <div>
         <label>Name </label>
         <input

           type="text"
           onChange={handleInputChange}
           name="name"
           value={input.name}
         />
       </div>
       {errors.name && (<p className={s.danger}> {errors.name} </p>)}

       <div>
         <label>Released </label>
         <input
         placeholder={`example: 2013-12-18` }
           type="text"
           onChange={handleInputChange}
           name="released"
           value={input.released}
         />
       {errors.released && (<p className={s.danger}> {errors.released} </p>)}

       </div>



       <div>
         <label>Rating </label>
           <input
           placeholder={`1 to 5 example: 3.1`}
             type="text"
             onChange={handleInputChange}
             name="rating"
             value={input.rating}
           />
         {errors.rating && (<p className={s.danger}> {errors.rating} </p>)}

       </div>
       <div>
         <div>
           <label>Description: </label>
         </div>
         <textarea
           name="description"
           value={input.description}
           onChange={handleInputChange}
           rows="6"
           cols="40">
         </textarea>
         {errors.description && (<p className={s.danger}> {errors.description} </p>)}

       </div>
       <div>
         <label>Background Image link</label>
           <input
             type="text"
             onChange={handleInputChange}
             name="background_image"
             value={input.background_image}
           />
       </div>
       <div>
         <label>Genres </label>
         <select
           name="genres"
           value= {input.genre}
           onChange={addGenre}
         >
           <option default value="select">select</option>
           {allGenres?.map((g,i)=>{
             return (
               <option key={i} value={g.name}>{g.name}</option>
             )
           })}
         </select>
         <br/>


         {genres?.map((g,i)=>{
           return <span key={i}>{`"`}{g}{`" `}</span>
         })}
         {errors.genres && (<p className={s.danger}> {errors.genres} </p>)}


       </div>
       <div>
         <label>Platforms </label>
         <select
           name="platforms"
          value= {input.platform}
           onChange={addPlatform}
         >
           <option default value="select">select</option>
           {
             allPlatforms?.map((p,i)=>{
               return (
                 <option key={i} value={p.name}>{p.name}</option>
               )
             })
           }
         </select>
         <br/>
         {platforms?.map((p,i)=>{
           return <span key={i}>{`"`}{p}{`" `}</span>
         })}
         {errors.platforms && (<p className={s.danger}> {errors.platforms} </p>)}

       </div>
       <button className='btn'
         type="submit"
         onClick={handleSubmit}
         name="button">
           Submit
         </button>
         </div>

     </form>
     <Link to='/home'>
       <button className='btn'
         >
           Go to home
         </button>
     </Link>
     </div>
 );
}
