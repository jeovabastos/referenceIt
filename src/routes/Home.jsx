import { Link } from "react-router";
import './Home.css'

export default function Home() {
    return (
        <>
            <main className="mainTopics">
                <Link to={'estudar'} className="category__container">
                    {/* <h2>ESTUDAR</h2>                         */}
                    <img src="/assets/estudarCover.png" alt="ESTUDAR" className="imagem-hover imagem-container"/>
                </Link>

                <Link to={'praticar'} className="category__container">
                    {/* <h2>PRATICAR</h2> */}
                    <img src="/assets/praticarCover.png" alt="PRATICAR" className="imagem-hover imagem-container"/>
                </Link>

                <Link to={'complementos'} className="category__container">
                    {/* <h2>COMPLEMENTOS</h2> */}
                    <img src="/assets/complementosCover.png" alt="COMPLEMENTOS" className="imagem-hover imagem-container"/>
                </Link>

                <Link to={'comunidade'} className="category__container">
                    {/* <h2>COMUNIDADE</h2> */}
                    <img src="/assets/comunidadeCover.png" alt="COMUNIDADE" className="imagem-hover imagem-container"/>
                </Link>
            </main>
        </>
    )
}
