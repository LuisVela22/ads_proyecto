// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/haeder/Header.tsx'
// import Home from './components/home/Home.tsx';
// import Footer from './components/Footer.tsx';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
 

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

