import { Routers } from "./Routers";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";
import './assets/img/iconmoon/style.css'
import { CustomCursor } from "./components/custom-mouse";
import { RouteProvider } from "./context/RouteContext";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  console.log('What are you looking for ? 👀')
  return (
    <LanguageProvider>
      <BrowserRouter>
        <RouteProvider>
          <main>
            {/*<CustomCursor />*/}
            <Routers />
          </main>
        </RouteProvider>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;

