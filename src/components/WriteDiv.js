import React, { useContext, useRef, useState } from 'react';
import { store } from '../store';

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


    const clickHandler = () => {
      textArea = textArea.current;
      if (textArea.selectionStart === textArea.selectionEnd) {
        return; // nothing is selected
      }
    
      let selected = textArea.value.slice(textArea.selectionStart, textArea.selectionEnd);
      textArea.setRangeText(`**${selected}**`);
      console.log(`${textArea.value}`);
      setNameFromRef(textArea.value);
      dispatch({type:"text", data: textArea.value});


    }

    return (
      <div className="writeDivContainer">
      <div className="writeBanner">EDIT
      <button onClick={clickHandler}>B</button>
      </div>
        <textarea ref={textArea} className="writeDiv" value={nameFromRef}  onChange={onChange}   />
      </div>
    )
}

export default WriteDiv;
