import ReactMarkdown from 'react-markdown';
import { useMarkdown } from '../customHooks/useMarkdown.jsx';

export default function Linhas(){
    const content = useMarkdown('/contentData/linhas.md');

    return(
        <>
            <ReactMarkdown>{content}</ReactMarkdown>
        </>
    )
}