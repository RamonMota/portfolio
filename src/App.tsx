import React, { useState } from "react";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";


import "./App.scss";
import Routers from "./Routers";
import { Introdution } from "./components/Introdution/Introdution";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function App() {
  const [showIntrodution, SetShowIntrodution] = useState('')
  useEffect(() => {
    localStorage.setItem('showIntrodution', 'true');
  }, []);

  return (
    <AnimatePresence>
      {/* <Introdution/> */}
      <Header/>
      <main>
        <Routers />
      </main>
      <Footer/>
    </AnimatePresence>
  );
}

export default App;