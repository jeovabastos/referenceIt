import { Link } from "react-router";

export default function Estudar(){
    return  (
        <>  
            <ul className="grid__container">
                <li>
                    <Link to={"comoestudar"}><img className="imagem-hover grid__container-img" src="/assets/estudar.png" alt="como estudar"/></Link>
                </li>
                <li>
                    <Link to={"linhas"}><img className="imagem-hover grid__container-img" src="/assets/linha.png" alt="fundamento 1: linha"/></Link>
                </li>
                <li>
                    <Link to={"formas"}><img className="imagem-hover grid__container-img" src="/assets/forma.png" alt="fundamento 2: forma"/></Link>
                </li>
                <li>
                    <Link to={"perspectivas"}><img className="imagem-hover grid__container-img" src="/assets/perspectiva.png" alt="fundamento 3: perspectiva"/></Link></li>
                <li>
                    <Link to={"valores"}><img className="imagem-hover grid__container-img" src="/assets/valor.png" alt="fundamento 4: valor"/></Link>
                </li>
                <li>
                    <Link to={"cores"}><img className="imagem-hover grid__container-img" src="/assets/cor.png" alt="fundamento 5: cor"/></Link>
                </li>
                <li>
                    <Link to={"composicoes"}><img className="imagem-hover grid__container-img" src="/assets/composicao.png" alt="fundamento 6: composição"/></Link>
                </li>
                <li>
                    <Link to={"anatomia"}><img className="imagem-hover grid__container-img" src="/assets/anatomia.png" alt="anatomia"/></Link>
                </li>
                <li>
                    <Link to={"criatividade"}><img className="imagem-hover grid__container-img" src="/assets/criatividade.png" alt="criatividade"/></Link>
                </li>
                <li>
                    <Link to={"tecnicas"}><img className="imagem-hover grid__container-img" src="/assets/tecnica.png" alt="técnicas"/></Link>
                </li>
            </ul>
        </>
    )
}