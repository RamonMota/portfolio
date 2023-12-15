import { createRoot } from 'react-dom/client';
import App from './App';

const portalRoot = document.getElementById('root')!;

const root = createRoot(portalRoot);
root.render(<App />)
