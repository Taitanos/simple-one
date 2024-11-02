import React from 'react';
import './App.css';
import {Header} from "./layout/Header";
import {Navbar} from "./layout/Navbar";
import {Main} from "./layout/Main";

function App() {
  return (
    <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <Main/>
    </div>
  );
}

export default App;
