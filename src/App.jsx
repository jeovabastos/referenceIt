import { Outlet, Link } from 'react-router';
import './App.css';

function App() {
  return (
    <>
      <div>
        <header><Link to={'/'}>REFERENCE IT</Link></header>
        <main>
          <Outlet/>
        </main>
        <footer>Meu Rodapé</footer>
      </div>
    </>
  );
}

export default App;
