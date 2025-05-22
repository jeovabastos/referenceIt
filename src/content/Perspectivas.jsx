import ReactMarkdown from 'react-markdown';
import { useMarkdown } from '../customHooks/useMarkdown.jsx';

export default function Perspectivas(){
    const content = useMarkdown('/contentData/perspectiva.md');

    return(
        <>
            <ReactMarkdown>{content}</ReactMarkdown>        
        </>
    )
}