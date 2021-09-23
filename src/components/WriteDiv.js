import React, { useContext, useRef, useState } from 'react';
import { store } from '../store';
import Modal from './Modal';
import InsertImageModal from './InsertImageModal';

function WriteDiv() {
    const globalState = useContext(store);
    const { dispatch } = globalState;
    const [nameFromRef, setNameFromRef] = useState(``);
    let textArea = useRef(null);

    const onChange = (event) => {
      let text = event.target.value
      setNameFromRef(text);
      text = text.replace(/\n/g, `  \n`);
      console.log(text);
      dispatch({type:"text", data: text});

    }

    const clickHandler = (operator) => {
      textArea = textArea.current;
      if (textArea.selectionStart === textArea.selectionEnd) {
        return; // nothing is selected
      }
    
      let selected = textArea.value.slice(textArea.selectionStart, textArea.selectionEnd);
      
      let wrapAround = ""
      if(operator === "b") {
        wrapAround = "**";
      } else if (operator === "i") {
        wrapAround = "*";
      }


      textArea.setRangeText(` ${wrapAround}${selected}${wrapAround} `);
      console.log(`${textArea.value}`);
      setNameFromRef(textArea.value);
      dispatch({type:"text", data: textArea.value});
    }

    return (
      <div className="writeDivContainer">
      <div className="writeBanner">
      <i className="fab fa-markdown md-logo"></i>
      <button onClick={ () => clickHandler("b")}><i class="fas fa-bold"></i></button>
      <button onClick={ () => clickHandler("i")}><i class="fas fa-italic"></i></button>
      <button ><i class="fas fa-list-ul"></i></button>
      <button ><i class="fas fa-list-ol"></i></button>
      <button ><i class="fas fa-quote-left"></i></button>
      <button ><i class="fas fa-link"></i></button>
      <InsertImageModal dispatch={dispatch} textArea={textArea} setNameFromRef={setNameFromRef}/>
      </div>
        <textarea ref={textArea} className="writeDiv" value={nameFromRef}  onChange={onChange}   />
      </div>
    )
}

export default WriteDiv;
