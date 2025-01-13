import { Link } from "react-router";

export default function Praticar(){
    return (
        <>
            <h1>Praticar PAGE</h1>

            <main>
                <section>
                    <h2>Antes de iniciar a prática, anote em que pretende focar em cada categoria</h2>

                    <div>
                        <h2>Fundamentos</h2>

                        <ul>
                            <li>Forma e proporção</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Técnicas</h2>

                        <ul>
                            <li>Desenho estrutural</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Materiais</h2>

                        <ul>
                            <li>Papel e lápis</li>
                            <li>Ilustração digital</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2>Agora que escolheu, inicie uma sessçao de prática em uma das categorias abaixo</h2>

                    {/* IMPLEMENTAR CADA CATEGORIA NA ROTA DO SLIDER */}
                    <div>
                        <Link to={"slider"}><img src="" alt="Figura humana"/></Link>
                    </div>

                    <div>
                        <img src="" alt="Figura animal"/>
                    </div>                    

                    <div>
                        <img src="" alt="Cenários"/>
                    </div>                    
                </section>
            </main>
        </>
    )
}