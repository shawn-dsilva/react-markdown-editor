import React, {useContext,useRef, useState, useEffect} from 'react'
import { store } from '../store';


function DownloadFile(props) {
    
    let dofileDownload = useRef(null);
    const [fileDownloadUrl, setFileDownloadUrl] = useState(null);

    useEffect(() => { 
        dofileDownload.current.dispatchEvent(
            new MouseEvent('click', {
              view: window,
              bubbles: true,
              cancelable: true,
              buttons: 1,
            }),
          );
        console.log(fileDownloadUrl)  
         URL.revokeObjectURL(fileDownloadUrl);   
         setFileDownloadUrl(null);
     }, [fileDownloadUrl])


    function clickHandler() {
        localStorage.setItem('document', props.value);
        let file = localStorage.getItem("document");
        const blob = new Blob([file]);  
        setFileDownloadUrl(URL.createObjectURL(blob));

        // console.log(blob);                 // Step 3
        // setFileDownloadUrl(URL.createObjectURL(blob));
        // dofileDownload.click();                   // Step 6
        // URL.revokeObjectURL(fileDownloadUrl);          // Step 7
        // const element = document.createElement("a");
        // element.href = URL.createObjectURL(blob);
        // element.download = "readme.md";
        // document.body.appendChild(element);
        // element.click();

    }

    return (
        <div className="div-container">
     <button onClick={clickHandler}>
             <i class="fas fa-file-download"></i>
    <a style={{"display":"none"}}
         download="readme.md"
         href={fileDownloadUrl}
         ref={dofileDownload}>
        </a>
    </button>
        </div>
    )
}

export default DownloadFile
