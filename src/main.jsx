import { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Slider from './routes/Slider';
import Home from './routes/Home';
import Estudar from './routes/Estudar';
import Praticar from './routes/Praticar';
import Tecnicas from './routes/Tecnicas';
import Comunidade from './routes/Comunidade';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home/>}/>
          
          <Route path="estudar" >
            <Route index element={<Estudar/>}/>
            <Route path="tecnicas" element={<Tecnicas />} />
          </Route>

          <Route path="praticar">
            <Route index element={<Praticar/>}/>
            <Route path='slider' element={<Slider/>}/>
          </Route>

          <Route path='comunidade' element={<Comunidade/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
);