import { Routers } from "./Routers";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";
import './assets/img/iconmoon/style.css'
import './assets/style/fade-animation.scss'

function App() {

  return (
    <BrowserRouter>
      <main>
        <Routers />
      </main>
    </BrowserRouter>
  );
}

export default App;

