import { Link } from "react-router";

export default function Praticar(){
    return (
        <>
            <h1>Praticar PAGE</h1>

            <main>
                <section>
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