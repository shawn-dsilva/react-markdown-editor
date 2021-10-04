import React, {useContext,useRef, useState, useEffect} from 'react'
import { store } from '../store';
import Modal from './Modal';
import Tooltip from './Tooltip';

function DownloadFile(props) {
    
    let dofileDownload = useRef(null);
    const [fileDownloadUrl, setFileDownloadUrl] = useState(null);
    const [modalToggle, setModalToggle] = useState(false);
    const [fileName, setFileName] = useState("README");

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

     const modalToggler = (e) => {
         e.preventDefault();
        setModalToggle(!modalToggle);
    }

    const handleInputChange = (event) => {
        setFileName(event.target.value);
    }


    function submitHandler() {
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
    <Tooltip text="Download File">
        <button onClick={e => modalToggler(e)}>
             <i class="fas fa-file-download"></i>
        </button>
    </Tooltip>
    <a style={{"display":"none"}}
         download={fileName+".md"}
         href={fileDownloadUrl}
         ref={dofileDownload}>
        </a>
    <Modal show={modalToggle} onClose={e => modalToggler(e)}>
        <h1>Enter File Name: </h1>
        <input
         type="text"
         value={fileName}
         name="fileName"
         onChange={e => handleInputChange(e)}
         >
        </input>
        <button className="modal-submit" onClick={e => submitHandler(e)}>submit</button>
      </Modal>
        </div>
    )
}

export default DownloadFile
