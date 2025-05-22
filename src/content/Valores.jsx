import ReactMarkdown from 'react-markdown';
import { useMarkdown } from '../customHooks/useMarkdown.jsx';   

export default function Valores(){
    const content = useMarkdown('/contentData/valor.md');

    return(
        <>
            <ReactMarkdown>{content}</ReactMarkdown>
        </>
    )
}