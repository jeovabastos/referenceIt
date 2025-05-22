import ReactMarkdown from 'react-markdown';
import { useMarkdown } from '../customHooks/useMarkdown.jsx';

export default function Formas(){
    const content = useMarkdown('/contentData/formas.md');

    return(
        <>
            <ReactMarkdown>{content}</ReactMarkdown>
        </>
    )
}