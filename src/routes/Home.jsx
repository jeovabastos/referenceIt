import { Link } from "react-router";
import estudarImg from '../assets/ESTUDAR.png'
import comunidadeImg from '../assets/COMUNIDADE.png'
import praticarImg from '../assets/PRATICAR.png'
import './Home.css'

export default function Home() {
    return (
        <>
            <main className="mainClass">
                <div className="esquerda">
                    <Link to={'estudar'} className="estudarImg">
                        <img className="imagem-container imagem-hover" src={estudarImg} alt="estudar" />
                    </Link>

                    <Link to={'comunidade'} className="comunidadeImg">
                        <img className="imagem-container imagem-hover" src={comunidadeImg} alt="estudar" />
                    </Link>
                </div>

                <div className="direita">
                    <Link to={'praticar'} className="praticarImg">
                        <img className="imagem-container imagem-hover" src={praticarImg} alt="estudar" />
                    </Link>
                </div>
            </main>
        </>
    )
}
