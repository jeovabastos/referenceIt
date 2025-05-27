import { Link } from "react-router";

export default function Estudar(){
    return  (
        <>  
            <h1>Estudar</h1>

            <ul>
                <li><Link to={"comoestudar"}>Como estudar</Link></li>
                <li><Link to={"linhas"}>Fundamento 1: Linhas</Link></li>
                <li><Link to={"formas"}>Fundamento 2: Formas</Link></li>
                <li><Link to={"perspectivas"}>Fundamento 3: Perspectivas</Link></li>
                <li><Link to={"valores"}>Fundamento 4: Valores</Link></li>
                <li><Link to={"cores"}>Fundamento 5: Cores</Link></li>
                <li><Link to={"composicoes"}>Fundamento 6: Composições</Link></li>
                <li><Link to={"anatomia"}>Anatomia</Link></li>
                <li><Link to={"criatividade"}>Criatividade</Link></li>
                <li><Link to={"tecnicas"}>Técnicas</Link></li>
            </ul>
        </>
    )
}