import React from "react";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import Routers from './pages/Routers'

import "./App.scss";
import "./assets/style/global-style.scss"

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
