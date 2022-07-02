import React, { useState } from "react";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";


import "./App.scss";
import "./assets/style/global-style.scss"
import Routers from "./Routers";
import { Introdution } from "./components/Introdution/Introdution";

function App() {
  const [isOpen, setIsOpen] = useState(true)

  setTimeout(() => {
    setIsOpen(() => false)
  }, 3100)

  return (
    <>
      {isOpen && <Introdution/>}
      <Header/>
      <main>
        <Routers />
      </main>
      <Footer/>
    </>
  );
}

export default App;