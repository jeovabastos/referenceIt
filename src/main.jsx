// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// ACIMA É O QUE HAVIA ANTES

import { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
// import Home from './routes/Home';
import Slider from './routes/Slider';
// import Estudar from './routes/Estudar';
// import Praticar from './routes/Praticar';
// import Tecnicas from './routes/Tecnicas';
// import Comunidade from './routes/Comunidade';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          {/* <Route index element={<Home/>}/> */}
          <Route index element={<Slider/>}/>
          
          {/* <Route path="estudar" >
            <Route index element={<Estudar/>}/>
            <Route path="tecnicas" element={<Tecnicas />} />
          </Route>

          <Route path="praticar" element={<Praticar />} />
          <Route path='comunidade' element={<Comunidade/>}/> */}
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
);