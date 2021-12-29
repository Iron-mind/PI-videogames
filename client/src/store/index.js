import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer/index";
import thunk from "redux-thunk";

var devtoolstore = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
var store = createStore(rootReducer,compose(applyMiddleware(thunk),devtoolstore)

     )
export default store
