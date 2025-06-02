import { Link } from "react-router";

export default function Complementos(){
    return(
        <>
            <ul>
                <li><Link to={""}>Exercícios</Link></li>
                <li><Link to={""}>Materiais</Link></li>
                <li><Link to={""}>Links úteis</Link></li>
                <li><Link to={""}>Projetos</Link></li>
            </ul>

            <footer>
                <img src="/assets/alert.png"/>
            </footer>            
        </>
    )
}