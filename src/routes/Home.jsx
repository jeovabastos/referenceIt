import { Link } from "react-router";
import './Home.css'

export default function Home() {
    return (
        <>
            <main className="mainTopics">
                    <Link to={'estudar'} className="category__container">
                        <h2>ESTUDAR</h2>                        
                    </Link>

                    <Link to={'praticar'} className="category__container">
                        <h2>PRATICAR</h2>
                    </Link>

                    <Link to={'complementos'} className="category__container">
                        <h2>COMPLEMENTOS</h2>
                    </Link>

                    <Link to={'comunidade'} className="category__container">
                        <h2>COMUNIDADE</h2>
                    </Link>
            </main>
        </>
    )
}
