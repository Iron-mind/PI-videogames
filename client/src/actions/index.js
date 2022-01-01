export const GET_GAMES = 'GET_GAMES'
export const SEARCH_GAME = 'SEARCH_GAME'
export const FILTER_GAMES ='FILTER_GAMES'
export const GET_GENRES ='GET_GENRES'
 export const SET_SEARCHINPUT = 'SET_SEARCHINPUT'

var linkApi ='http://localhost:3001/'

//get all games in order or not in order
export function getGames(data={}) {
    if (data.order) {
      console.log('hola');
      //always response is asc
      return function (dispatch) {
          let ascOrDesc = data.orderBy
          let orderString = "?order="+data.order

          return fetch(linkApi+"videogames"+orderString+"&orderby="+ ascOrDesc)
          .then(data => data.json())
          .then(games=> {
             dispatch({
              type: GET_GAMES,
              payload: [...games]
            })
          })
          .catch(e=>console.log('Error',e))

      }
     }
    else
    return function (dispatch) {

        return fetch(linkApi+"videogames")
        .then(data => data.json())
        .then(games=> {
           dispatch({
            type: GET_GAMES,
            payload: [...games]
          })
        })
        .catch(e=>console.log('Error',e))
    }
}

export function filterGames  (data) {
  return {
    type: FILTER_GAMES,
    payload: data
  }
  // body...
};


export function getGenres  () {
  return function (dispatch) {

      return fetch(linkApi+"genres")
      .then(data => data.json())
      .then(res=> {
         dispatch({
          type: GET_GENRES,
          payload: [...res]
        })
      })
      .catch(e=>console.log('Error',e))
  }
};



export function searchGame(name, or={}) {
   if (or.order) {
     return function (dispatch) {
         let ascOrDesc = or.orderBy
         let orderString = "&order="+or.order

         return fetch(linkApi+"videogames?name="+name+orderString+"&orderby="+ ascOrDesc)
         .then(data => data.json())
         .then(games=> {
            dispatch({
             type: SEARCH_GAME,
             payload: {input:name, games:[...games]}
           })
         })
         .catch(e=>console.log('Error',e))

     }


   }

  return function (dispatch) {

      return fetch(linkApi+"videogames?name="+name)
      .then(data => data.json())
      .then(res=> {
         dispatch({
          type: SEARCH_GAME,
          payload: {input:name, games:[...res]}
        })
      })
      .catch(e=>console.log('Error',e))
  }

}


export function setSearchInput(inp) {
   return {
     type: SET_SEARCHINPUT,
     payload: inp
   }
};
