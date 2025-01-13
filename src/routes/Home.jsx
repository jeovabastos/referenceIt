import { Link } from "react-router";
import estudarImg from '../assets/estudar.png'
import './Home.css'

export default function Home() {
    return (
        <>
            <main>
                <Link to={'estudar'}>
                    <div>
                        <img className="imagem-container imagem-hover" src={estudarImg} alt="estudar" />
                    </div>
                </Link>

                <Link to={'praticar'}>
                    <div>
                        <img className="imagem-container imagem-hover" src={estudarImg} alt="estudar" />
                    </div>
                </Link>

                <Link to={'comunidade'}>
                    <div>
                        <img className="imagem-container imagem-hover" src={estudarImg} alt="estudar" />
                    </div>
                </Link>
            </main>
        </>
    )
}