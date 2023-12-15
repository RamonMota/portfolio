import { useState } from "react";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

import { Routers } from "./Routers";
import { useEffect } from "react";
import { ChakraProvider, Fade } from "@chakra-ui/react";
import { CustomTheme } from "./assets/theme/costumer-theme"
import { BrowserRouter } from "react-router-dom";

import "./App.scss";
import './assets/img/iconmoon/style.css'
import './assets/style/fade-animation.scss'
import { ModalIntroduction } from "./components/introduction/modal-introduction";

function App() {

  const [showIntroduction, SetShowIntroduction] = useState(false)

  useEffect(() => {
    const checkLocal = window.localStorage.getItem('INTRODUCTION')

    if (checkLocal !== 'hidden') {
      SetShowIntroduction(true)

      setInterval(() => {
        SetShowIntroduction(false)
      }, 4000);
    }

    window.localStorage.setItem('INTRODUCTION', 'hidden')
  },[]);

  return (
    <BrowserRouter>
      <ChakraProvider theme={CustomTheme}>
        <Fade in={showIntroduction} >
          <ModalIntroduction />
        </Fade>
        <Fade in={!showIntroduction}  >
          <Header />
          <main>
            <Routers />
          </main>
          <Footer />
        </Fade>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;

