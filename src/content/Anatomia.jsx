import ReactMarkdown from 'react-markdown';
import { useMarkdown } from '../customHooks/useMarkdown.jsx';

export default function Anatomia(){
    const content = useMarkdown('/contentData/anatomia.md');

    return(
        <>
            <ReactMarkdown>{content}</ReactMarkdown>        
        </>
    )
}