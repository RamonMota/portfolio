import { Routers } from "./Routers";
import { BrowserRouter } from "react-router-dom";

import "./tailwind.generated.css";
import "./App.scss";
import './assets/img/iconmoon/style.css'
import { RouteProvider } from "./context/RouteContext";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  console.log('What are you looking for ? 👀')
  return (
    <LanguageProvider>
      <BrowserRouter>
        <RouteProvider>
          <main>
            <Routers />
          </main>
        </RouteProvider>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
