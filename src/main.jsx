// config
import { StrictMode } from 'react';
import ReactDOM from "react-dom/client";

// raiz do site
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Home from './routes/Home';
import Estudar from './routes/Estudar';
// import Praticar from './routes/Praticar';
import Comunidade from './routes/Comunidade';
import Complementos from './routes/Complementos';

// conteudo do site
import Anatomia from './content/Anatomia';
import ComoEstudar from './content/ComoEstudar';
import Composicoes from './content/Composicoes';
import Cores from './content/Cores';
import Criatividade from './content/Criatividade';
import Formas from './content/Formas';
import Linhas from './content/Linhas';
import Perspectivas from './content/Perspectivas';
import Slider from './content/Slider';
import Tecnicas from './content/Tecnicas';
import Valores from './content/Valores';

// config
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home/>}/>
          
          <Route path="estudar" >
            <Route index element={<Estudar/>}/>
            <Route path="anatomia" element={<Anatomia />} />
            <Route path="comoestudar" element={<ComoEstudar />} />
            <Route path="composicoes" element={<Composicoes />} />
            <Route path="cores" element={<Cores />} />
            <Route path="criatividade" element={<Criatividade />} />
            <Route path="formas" element={<Formas />} />
            <Route path="linhas" element={<Linhas />} />
            <Route path="perspectivas" element={<Perspectivas />} />
            <Route path="valores" element={<Valores />} />
            <Route path="tecnicas" element={<Tecnicas />} />
          </Route>

          <Route path="praticar">
            <Route index element={<Slider/>}/>
            {/* <Route path='slider' element={<Slider/>}/> */}
          </Route>

          <Route path='comunidade' element={<Comunidade/>}/>
          <Route path='complementos' element={<Complementos/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
);