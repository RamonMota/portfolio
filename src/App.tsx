import { Routers } from "./Routers";
import { HashRouter } from "react-router-dom";

import "./tailwind.generated.css";
import "./App.scss";
import './assets/img/iconmoon/style.css'
import { RouteProvider } from "./context/RouteContext";
import { LanguageProvider } from "./context/LanguageContext";
import { Analytics } from "./config/analytics";

function App() {
  console.log('What are you looking for ? 👀')
  return (
    <LanguageProvider>
      <HashRouter>
        <Analytics />
        <RouteProvider>
          <main>
            <Routers />
          </main>
        </RouteProvider>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
