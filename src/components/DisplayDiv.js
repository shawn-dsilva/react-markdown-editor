import React , {useContext} from 'react'
import { store } from '../store';
import ReactMarkdown from 'react-markdown'


function DisplayDiv() {
    const globalState = useContext(store);

    return (
        <div className="displayDiv" >
           <ReactMarkdown children={globalState.state} allowedElements={["br"]}/> 
        </div>
    )
}

export default DisplayDiv
