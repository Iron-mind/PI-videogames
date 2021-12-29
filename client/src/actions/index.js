export const GET_GAMES = 'GET_GAMES'

export function getGames(data) {
    return function (dispatch) {
        return fetch('http://localhost:3001/videogames')
        .then(data => data.json())
        .then(games=> {
           dispatch({
            type: GET_GAMES,
            payload: games
          })
        })
    }
}
