import React from 'react';
import './App.css';
import {List} from "./components/List.jsx"
import { FiActivity, FiAlertOctagon, FiBriefcase, FiChrome, FiAward} from "react-icons/fi";

/* Test contenu List */
const content = [
  {buttonContent:{id: 1, text: "Bulbizarre", icon:(<FiActivity/>)}, divider: true},
  {buttonContent:{id: 2, text: "Herbizarre",}, disabled:true},
  {buttonContent:{id: 3, text: "Florizarre"}, divider: true},
  {buttonContent:{id: 4, text: "Salamèche", icon:(<FiBriefcase/>)}},
  {buttonContent:{id: 5, text: "Reptincel", icon:(<FiAlertOctagon/>)}, divider: true},
  {buttonContent:{id: 6, text: "Dracaufeu", icon:(<FiAward/>)}},
];

// const content = []

function App() {
  return (
    //List of item composed with text and optional icon
    <div className="App">
        <List content={content}/>
    </div>
  );
}

export default App;
