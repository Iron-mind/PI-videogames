import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import AddVideogame  from './components/AddVideogame/AddVideogame.jsx'
import GameDetail  from './components/GameDetail/GameDetail.jsx'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path= '/gamedetail/:id' element = {<GameDetail/>}/>
        <Route path= '/addgame' element = {<AddVideogame/>}/>
      </Routes>
    </div>
  );
}

export default App;
