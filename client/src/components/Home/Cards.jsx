import React, {useState,  useEffect } from "react";

import Card from "./Card.jsx";

export default function Cards({items}) {




  return (
    <React.Fragment>
      {items.length > 0 ? (
        items.map((c) => {
          return <Card name={c.name} key={c.id} genre= {c.genres[0].name} imageLink={c.background_image} />;
        })
      ) : (
        <div>Not found</div>
      )}
    </React.Fragment>
  );
}
