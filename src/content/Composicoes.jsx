import ReactMarkdown from 'react-markdown';
import { useMarkdown } from '../customHooks/useMarkdown.jsx';

export default function Composicoes(){
    const content = useMarkdown('/contentData/composicao.md');

    return(
        <>
            <ReactMarkdown>{content}</ReactMarkdown>        
        </>
    )
}