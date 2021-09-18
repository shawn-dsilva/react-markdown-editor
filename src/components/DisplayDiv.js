import React , {useContext} from 'react'
import { store } from '../store';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import sanitizeHtml from 'sanitize-html';


function DisplayDiv() {
    const globalState = useContext(store);

    const custom = {li: ({node, ...props}) => <li className="list-elem" {...props} />}
    // let noHTMLData = sanitizeHtml(globalState.state, {
    //     allowedTags: ['br' ],
    //   });

    // noHTMLData = noHTMLData.replace(/<br\s*\/?>/mg,"  \n");
    // console.log(noHTMLData);

    // const test = ` some text   \n some more text   \n more text after newline`;

    return (
        <div className="displayDiv" >
           <ReactMarkdown components={custom} rehypePlugins={[rehypeRaw]} children={globalState.state} /> 
        </div>
    )
}

export default DisplayDiv
