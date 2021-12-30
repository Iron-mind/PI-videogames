export const GET_GAMES = 'GET_GAMES'
export const SEARCH_GAME = 'SEARCH_GAME'
var linkApi ='http://localhost:3001/'

//get all games
export function getGames(data) {
    if (data.order) {
      console.log('hola');
      //always response is asc
      return function (dispatch) {
          let ascOrDesc = data.orderBy==="desc"? "desc": "asc"
          let orderString = "?order="+data.order

          return fetch(linkApi+"videogames"+orderString+"&orderby="+ ascOrDesc)
          .then(data => data.json())
          .then(games=> {
             dispatch({
              type: "GET_GAMES_IN_ORDER",
              payload: [...games]
            })
          })
          .catch(e=>console.log('el error',e))

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
        .catch(e=>console.log('el error',e))
    }
}


export function getInOrder(data) {
  if(data.name){
    let orderString = data.order? "&order="+data.order:""
    let queryString = "?name="+data.name+orderString
    return function (dispatch) {
        return fetch(linkApi+"videogames"+queryString)
        .then(data => data.json())
        .then(games=> {
           dispatch({
            type: GET_GAMES,
            payload: [games]
          })
        })
    }
  }
}
