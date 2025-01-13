import { Link } from "react-router";

export default function Home() {
    return (
        <>
            <main>
                <Link to={'estudar'}>
                    <div>
                        <img src="" alt="estudar" />
                    </div>
                </Link>

                <Link to={'praticar'}>
                    <div>
                        <img src="" alt="praticar" />
                    </div>
                </Link>

                <Link to={'comunidade'}>
                    <div>
                        <img src="" alt="comunidade" />
                    </div>
                </Link>
            </main>
        </>
    )
}