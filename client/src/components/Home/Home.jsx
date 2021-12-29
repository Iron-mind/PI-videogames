import React from "react";
import Nav from "./Nav/Nav.jsx";
import Options from "./Options.jsx";
import PaginationItems  from './Pagination.jsx'

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Nav />
      <div className="row">
        <aside>
          <Options />
        </aside>
        <section>
          <PaginationItems />
        </section>
      </div>
    </div>
  );
}
