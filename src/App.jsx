import FavouriteSites from "./components/FavouriteSites";
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
//import './App.css';
import React, { useState} from "react";
import ReactDOM from "react-dom";
import StateAssignmentOne from './components/StateAssignmentOne';
import StateAssignmentTwo from "./components/StateAssignmentTwo";


function App() {
  return (
    <div className="App">
      <div className="Fav">
        <FavouriteSites />
      </div>
      <div className="Profile">
        <Profile />
      </div>
      <div className="Gallery">
        <Gallery />
      </div>
      <div className="Sao">
        <StateAssignmentOne />
      </div>
      <div className="Sat">
        <StateAssignmentTwo />
      </div>
      
    </div>
  );
}

export default App;
