import React, {useContext,useRef, useState} from 'react'
import { store } from '../store';


function DownloadFile(props) {
    
    let dofileDownload = null;
    const [fileDownloadUrl, setFileDownloadUrl] = useState("");

    const clickHandler = (event) => {
        localStorage.setItem('document', props.value);
        let file = localStorage.getItem("document");
        const blob = new Blob([file]);  
        // console.log(blob);                 // Step 3
        // setFileDownloadUrl(URL.createObjectURL(blob));
        // dofileDownload.click();                   // Step 6
        // URL.revokeObjectURL(fileDownloadUrl);          // Step 7
        const element = document.createElement("a");
        element.href = URL.createObjectURL(blob);
        element.download = "readme.md";
        document.body.appendChild(element);
        element.click();

    }

    return (
        <div className="div-container">
     <button onClick={ (event) => clickHandler(event)}>
             <i class="fas fa-file-download"></i>
    {/* <a 
         download="readme.md"
         href={fileDownloadUrl}
         ref={e=>dofileDownload = e}>
        </a> */}
    </button>
        </div>
    )
}

export default DownloadFile
