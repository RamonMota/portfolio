import { Routers } from "./Routers";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";
import './assets/img/iconmoon/style.css'
import { FloatSidebar } from "./components/float-sidebar";

function App() {

  return (
    <BrowserRouter>
      <main>
        <Routers />
        <FloatSidebar/>
      </main>
    </BrowserRouter>
  );
}

export default App;

