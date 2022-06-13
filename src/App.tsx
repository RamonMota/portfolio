import React, {useState} from "react";
import "./App.scss";
import './assets/index.css';
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import Routers from './pages/Routers'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Routers />
      </main>
      <Footer/>
    </>
  );
}

export default App;
