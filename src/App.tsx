import { Routers } from "./Routers";
import { BrowserRouter } from "react-router-dom";
import { IdProvider } from './/config/idContext'

import "./App.scss";
import './assets/img/iconmoon/style.css'
import { FloatSidebar } from "./components/float-sidebar";
import { CustomCursor } from "./components/custom-mouse";

function App() {



  return (
    <IdProvider>
      <BrowserRouter>
        <main>
          {/* <CustomCursor /> */}
          <Routers />
          <FloatSidebar />
        </main>
      </BrowserRouter>
    </IdProvider>
  );
}

export default App;

