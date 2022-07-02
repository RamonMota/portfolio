import React, { useState } from "react";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";


import "./App.scss";
import Routers from "./Routers";
import { Introdution } from "./components/Introdution/Introdution";

function App() {

  return (
    <>
      <Introdution/>
      <Header/>
      <main>
        <Routers />
      </main>
      <Footer/>
    </>
  );
}

export default App;