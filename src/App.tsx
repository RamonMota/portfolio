import React, { useState } from "react";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import './assets/img/iconmoon/style.css'


import "./App.scss";
import { Routers } from "./Routers";
import { Introdution } from "./components/Introdution/Introdution";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { CustomTheme } from "./assets/theme/costumer-theme"
import { BrowserRouter } from "react-router-dom";

function App() {
  const [showIntrodution, SetShowIntrodution] = useState('')
  useEffect(() => {
    localStorage.setItem('showIntrodution', 'true');
  }, []);

  return (
    <BrowserRouter>
      <ChakraProvider theme={CustomTheme}>
        {/* <Introdution/> */}
        <Header />
        <main>
          <Routers />
        </main>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;