import ReactMarkdown from 'react-markdown';
import { useMarkdown } from '../customHooks/useMarkdown.jsx';

export default function Cores(){
    const content = useMarkdown('/contentData/cores.md');

    return(
        <>
            <ReactMarkdown>{content}</ReactMarkdown>        
        </> 
    )
}