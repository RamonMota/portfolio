import { useState } from "react";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";


import { Routers } from "./Routers";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { CustomTheme } from "./assets/theme/costumer-theme"
import { BrowserRouter } from "react-router-dom";
import useLocalStorage from "./hooks/localStrege";

import "./App.scss";
import './assets/img/iconmoon/style.css'
import './assets/style/fade-animation.scss'
import { ModalIntroduction } from "./components/introduction/modal-introduction";

function App() {

  return (
    <BrowserRouter>
      <ChakraProvider theme={CustomTheme}>
        <ModalIntroduction />
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

