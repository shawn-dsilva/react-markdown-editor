import React, {useContext,useRef, useState, useEffect} from 'react'
import { store } from '../store';


function DownloadFile(props) {
    
    const clickHandler = (event) => {
        event.preventDefault()
        localStorage.setItem('document', props.value);
        let file = localStorage.getItem("document");
        const blob = new Blob([file]);  
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
    </button>
        </div>
    )
}

export default DownloadFile
