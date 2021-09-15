import React, { useContext, useRef, useState } from 'react';
import { store } from '../store';

const ContentEditableWithRef = (props) => {
    const defaultValue = useRef(props.value);
  
    const handleInput = (event) => {

      if (props.onChange) {
        props.onChange(event.target.innerHTML);
        const text = event.target.innerHTML
        console.log(text);
        props.dispatch({type:"text", data: text});
      }
    };

  
    return (
      <span
      className="writeDiv"
        contentEditable
        onInput={handleInput}
        dangerouslySetInnerHTML={{ __html: defaultValue.current }}
      />
    );
  };
  
function WriteDiv() {
    const globalState = useContext(store);
    const { dispatch } = globalState;
    const [nameFromRef, setNameFromRef] = useState("");


    return (
        <ContentEditableWithRef  value={nameFromRef} onChange={setNameFromRef} dispatch={dispatch} />

    )
}

export default WriteDiv;
