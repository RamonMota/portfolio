import React, { useState } from "react";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";


import "./App.scss";
import Routers from "./Routers";
import { Introdution } from "./components/Introdution/Introdution";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {CustomTheme} from "./assets/theme/costumer-theme"

function App() {
  const [showIntrodution, SetShowIntrodution] = useState('')
  useEffect(() => {
    localStorage.setItem('showIntrodution', 'true');
  }, []);

  return (
    <ChakraProvider theme={CustomTheme}>
      {/* <Introdution/> */}
      <Header/>
      <main>
        <Routers />
      </main>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;