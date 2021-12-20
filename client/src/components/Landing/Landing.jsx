import React, { Component } from "react";
import {Link} from 'react-router-dom';
import s from './Landing.module.css'

class Landing extends Component {
  render() {
    return (
      <div className={s.landing}>
      {  /* <div className={s.title}>*/}
          <h1 className={s.title}> Videogames Web </h1>
        {/* </div>*/}

        <div className={s.landingImg}>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <button className={s.btn_home}> Go to Home </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Landing;
