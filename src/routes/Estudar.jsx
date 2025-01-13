import { Link } from "react-router";

export default function Estudar(){
    return  (
        <>
            <h1>Estudar PAGE</h1>

            <div>
                <h2>Sumário</h2>
                <ul>
                    <li><a href="#">O que estudar</a></li>
                    <li><a href="#">Como estudar</a></li>

                    <li><a href="#">Fundamentos</a></li>
                    <li><a href="#">Exercícios</a></li>
                    <li><a href="#">Materiais</a></li>
                    <li><Link to={'tecnicas'} >Técnicas</Link></li>
                    <li><a href="#utils">Links úteis</a></li>
                    <li><a href="#">Projetos</a></li>
                </ul>
            </div>

            {/* APENAS O QUE ESTUDAR E COMO ESTUDAR É QUE ESTARÃO NESSA PÁGINA, OS OUTROS CONTEÚDOS SERÃO REDIRECIONADOS CADA UM PARA SUA PÁGINAE */}
            <div>
                <h1 id="oqueestudar">O que estudar</h1>
            </div>

        </>
    )
}