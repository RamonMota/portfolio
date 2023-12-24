import { Routers } from "./Routers";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";
import './assets/img/iconmoon/style.css'
import { FloatSidebar } from "./components/float-sidebar";
import { CustomCursor } from "./components/custom-mouse";

function App() {



  return (
    <BrowserRouter>
      <main>
        {/* <CustomCursor /> */}
        <Routers />
        <FloatSidebar />
      </main>
    </BrowserRouter>
  );
}

export default App;

