import { Routers } from "./Routers";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";
import './assets/img/iconmoon/style.css'
import { CustomCursor } from "./components/custom-mouse";

function App() {
  console.log('👀')
  return (
    <BrowserRouter>
      <main>
        {/*<CustomCursor />*/}
        <Routers />
      </main>
    </BrowserRouter>
  );
}

export default App;

