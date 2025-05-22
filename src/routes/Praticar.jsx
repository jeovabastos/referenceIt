import { Link } from "react-router";

export default function Praticar(){
    return (
        <>
            <h1>Praticar PAGE</h1>

            <main>
                <section>
                    <h2>prática de cópia</h2>
                    <p>Use dynamic sketching para masterizar o traço fluído em seu desenho com uma das categorias abaixo!</p>

                    {/* IMPLEMENTAR CADA CATEGORIA NA ROTA DO SLIDER */}
                    <div>
                        <Link to={"slider"}><img src="" alt="figura humana"/></Link>
                    </div>
                    
                    <div>
                        <Link to={"slider"}><img src="" alt="figura animal"/></Link>
                    </div>

                    <div>
                        <Link to={"slider"}><img src="" alt="cenários internos"/></Link>
                    </div>

                    <div>
                        <Link to={"slider"}><img src="" alt="cenários externos"/></Link>
                    </div>
                </section>
            </main>
        </>
    )
}