import {SEARCH_GAME,
   GET_GAMES,
    FILTER_GAMES,
     GET_GENRES,
   SET_SEARCHINPUT }  from '../actions/index.js'


const initialState = {
  games: [],
  searchInput:'',
  temporaryGames:[],
  gameDetail:{},
  genres:[]
  };


  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_GAMES:
//       console.log();
        console.log(action.payload);
        return   {
            ...state,
            temporaryGames: action.payload,
            games: [...action.payload]
          }
      case FILTER_GAMES:
      console.log(action.payload.filter);
        if (action.payload.filter === 'genre') {
          return {
            ...state,
            games: state.temporaryGames.filter((g)=>{
              return g.genres.reduce((p,c)=>{
                return p||(c.name===action.payload.filterBy)
              }, false)
            })
          }

        }
        return {
          ...state,
          games: state.temporaryGames.filter((g)=>{
            return g.status=== action.payload.filterBy
          })
        }
     case SEARCH_GAME:
       return {
         ...state,
         games: action.payload.games,
         searchInput:action.payload.input,
         temporaryGames: action.payload.games,

       }


      case SET_SEARCHINPUT:
        return {
           ...state,
           searchInput: action.payload
        };
      case GET_GENRES:
        return {
          ...state,
          genres: [...action.payload]
        }



      default:
        return state;
    }


  }

  export default rootReducer;
