export const GET_GAMES = 'GET_GAMES'
export const SEARCH_GAME = 'SEARCH_GAME'
export const FILTER_GAMES ='FILTER_GAMES'
export const GET_GENRES ='GET_GENRES'
export const SET_SEARCHINPUT = 'SET_SEARCHINPUT'
 export const GET_GAME_DETAIL = 'GET_GAME_DETAIL'
 export const GET_PLATFORMS = 'GET_PLATFORMS'
export const POST_GAME = 'POST_GAME'

var linkApi ='https://api-vgames.herokuapp.com/'

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

export function getGameById(id) {
  return function (dispatch) {

      return fetch(linkApi+"videogames/"+id)
      .then(data => data.json())
      .then(res=> {
         dispatch({
          type: GET_GAME_DETAIL,
          payload: res
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

export function getPlatforms(){
  return function (dispatch) {

      return fetch(linkApi+"platforms")
      .then(data => data.json())
      .then(res=> {
         dispatch({
          type: GET_PLATFORMS,
          payload: [...res]
        })
      })
      .catch(e=>console.log('Error',e))
  }
}

export function postGame(act) {

  return function (dispatch) {
    async function postData(url = '', data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }



    return postData(linkApi+'videogame', act)
      .then((json) => {
        dispatch({ type: POST_GAME, payload: json });
      })
      .catch(err=>console.log("server response error",err));
  };

}
