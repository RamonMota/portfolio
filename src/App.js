import React, {useState} from "react";
import "./assets/App.css";
import './assets/index.css';
import Routers from './components/pages/Routers.js'

import Introdution from './components/Introdution/Introdution.js'

import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from './components/UI/themes'
import {Btntheme} from './components/UI'
import SwitchTheme from "./components/switchTheme/switch.js"
  

function App() {
  const [theme, settheme] = useState(true);

  const toggleTheme = () => {
    settheme ((theme) => !theme);
  }
 

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      {/*<Introdution/>*/}
      <Btntheme onClick={toggleTheme}>
        <SwitchTheme theme={theme} />
      </Btntheme>
      {/*<GlobalStyled />*/}
      <Routers />
    </ThemeProvider>
  );
}

export default App;
