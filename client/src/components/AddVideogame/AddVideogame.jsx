import React, {useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import {
  getPlatforms,
   getGenres,
   postGame
 } from '../../actions'

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = 'Name is required';
  }
  if (!input.rating) {
    errors.rating = 'Rating is required';

  } else if (Number(input.rating)>5|| Number(input.rating)< 1) {
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
     }, [])
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

   setInput({
     name: "",
     released: "",
     rating: "",
     description: '',

   });
   setgenres([])
   setplatforms([])
   dispatch(postGame({status:'added', genres, platforms, ...input}))
   //alert(" Game added")
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
     <>
     <h1>Add VideoGame</h1>
     <form

       className="form"

       onSubmit={handleSubmit}
     >
     <div className='card'>

       <div>
         <label>Name </label>
         <input

           type="text"
           onChange={handleInputChange}
           name="name"
           value={input.name}
         />
       </div>
       {errors.name && (<p> {errors.name} </p>)}

       <div>
         <label>Released </label>
         <input
         placeholder={`example: 2013-12-18` }
           type="text"
           onChange={handleInputChange}
           name="released"
           value={input.released}
         />
       {errors.released && (<p> {errors.released} </p>)}

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
         {errors.rating && (<p> {errors.rating} </p>)}

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
         {errors.description && (<p> {errors.description} </p>)}

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
         {errors.genres && (<p> {errors.genres} </p>)}


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
         {errors.platforms && (<p> {errors.platforms} </p>)}

       </div>
       <button className='btn'
         type="submit"
         onClick={handleSubmit}
         name="button">
           Submit
         </button>
         </div>

     </form>
     </>
 );
}
