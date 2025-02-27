//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.scss';
//import Home from './Home.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(<App />);
