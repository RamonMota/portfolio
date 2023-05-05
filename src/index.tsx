import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App';

const portalRoot = document.getElementById('root')!;

const root = createRoot(portalRoot);
root.render(<App />)
