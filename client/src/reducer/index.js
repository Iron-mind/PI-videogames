import {GET_GAMES}  from '../actions/index.js'


const initialState = {
  games: [],
  searchInput:'',
  temporaryGames:[]

  };


  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_GAMES:
//       console.log();
  console.log(action.payload);
        return   {
            ...state,

            //temporaryGames: action.payload,
            games: [...action.payload]
          }
      case "GET_GAMES_IN_ORDER":
      return   {
          ...state,

          //temporaryGames: action.payload,
          games: [...action.payload],
          temporaryGames:[...action.payload],
        }

      default:
        return state;
    }

  }

  export default rootReducer;
