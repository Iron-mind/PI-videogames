# Metodología Backend

### React-redux con hooks

## Pasos

- Utilizar _Create React App_
- instalar dependencias

```command
  $ npm install react-redux
  $ npm add react-router-dom@6 history@5
  $ npm install redux-thunk --save
```

- Crear store y reducer

```js
//src/store.js
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

var devtoolstore = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
var store = createStore(rootReducer,compose(applyMiddleware(thunk),devtoolstore)

     )
export default store
```

```js
//src/reducer/index.js
const initialState = {

  };


  function rootReducer(state = initialState, action) {
    switch...
    return state;
  }

  export default rootReducer;
```

- Poner store en el provider y encapsular para el routing

```js
// src/index.js
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```
```js
// src/App.js

import React from "react";
import { Route } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <Routes>
          <Route  path="/" element={<Landing/>} />
          <Route path="/section"... />
          <Route path="/item/:id" ... />
      </Routes>


    </React.Fragment>
  );
}

export default App;
```

- Crear los componentes y las rutas.

```js
import React from "react";

export default function componentName() {
  return (<div>
     component
  </div>)
}

```

- Hacer funcionalidad: conectar actions y reducer a los componentes con funcionalidad

```js
import React, {useState,useEffect} from "react";
import { connect } from "react-redux";
import {action, anotherAction} from '../actions'


//                      \/
function componentName(props) { // props.action(), props.prop, etc.
  return (<div>
     component
  </div>)
}


function mapStateToProps(state) {
  return {
    prop: state.prop,
    any: state.any
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: (params)=> dispatch(action(params)) ,
    anotherAction: (params) => dispatch(anotherAction(params))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(componentName);

```
- Hacer estilos. Hacer un componente y despues estiolos de ese componente.

> No usar legacy

```js
import "style.css"
//NO ES TAN USADA, ME PISA LOS OTROS ESTILOS


var s = require('../styles/estilos.module.css');

module.exports = React.createClass({
  render: function(){
    return (
      <div className= {s.prueba}>
        <h1 className={s.title}>Hola, Henry!!</h1>
        <p className{[s.title, s.size].join[' ']}>Prueba</p>
      </div>
    )
  }
});

```
> Con un css global
_no olvides configurar webpack para los loader de cssModules_
```css
// estilos.module.css   global
.prueba {
    background-color: blue;
}

.title {
  color: blue;
}

.size {
  font-size: 25px;
}

```
_pudes usar styled component _
```js
import React from 'react';
import styled from 'styled-components';

const Producto = styled.div`
  color: salmon;
  font-size: 20px;
  & h3 {
    background-color: SpringGreen;
  }
`;

const Titulo = styled.h3`
  font-size: 30px;
  &:hover {
    color: grey;
  }
`;

function Product(props) {
  return (
    <Producto>
      <Titulo>{props.title}</Titulo>
      <p>{props.price}</p>
    </Producto>
  );
}

export default Product;
```

_Recuerda ver que hay componentes con estilos similares, como Cards (de productos o de lo que sea), forms sencillos (de registro o de adición)_
