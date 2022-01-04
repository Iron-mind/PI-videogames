import React  from "react";
import {useSelector, useDispatch}  from 'react-redux'
import { useParams } from "react-router-dom";
import {getGameById}  from '../../actions/index.js'
import {Link } from 'react-router-dom'

let s = require('./GameDetail.module.css')

export default function GameDetail() {
  const {id}  = useParams()
  let game = useSelector((state)=>state.gameDetail)
  let dispatch = useDispatch()
  let style = {
    backgroundImage: 'url('+game.background_image +')',
    width: "100%",
    minHeight: "40rem",
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
  React.useEffect(()=>{
    dispatch(getGameById(id))
  },[])

  return (<div className={s.gameDetail} style={style}>
  <h1 className={s.title}>{game.name}</h1>
  <div className={s.content}>
    {game.description_raw ? game.description_raw : game.description}
  </div>
  <div className={s.rAndP}>
    <span>
      <h3>Genres</h3>
      <ul>
        {game.genres?.map((g, i) => {
          return <li key={i}>{g.name}</li>;
        })}
      </ul>
    </span>
    <span>
      <h3>Platforms</h3>
      <ul>
        {game.platforms?.map((p, i) => {
          let name = p.platform ? p.platform.name : p.name;
          return <li key={i}>{name}</li>;
        })}
      </ul>
    </span>
    <span>
      <h3>Rating</h3>
      <div>{game.rating}</div>
      <div>
        release date: {game.released}
      </div>

    </span>
  </div>

  <Link to={"/addgame"} style={{ textDecoration: "none" }}>
    <button className='btn'>Create New Game</button>
  </Link>
</div>
)
}
