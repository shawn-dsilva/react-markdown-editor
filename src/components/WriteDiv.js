import React, { useContext, useRef, useState } from 'react';
import { store } from '../store';
import sanitizeHtml from 'sanitize-html';

const ContentEditableWithRef = (props) => {
    const defaultValue = useRef(props.value);
  
    const handleInput = (event) => {

      if (props.onChange) {
        props.onChange(event.target.innerHTML);
        const text = event.target.innerHTML
        console.log(text);

        let noHTMLData = text.replace(/(<([^>]+)>)/gi, "  \n");
        props.dispatch({type:"text", data: noHTMLData});
      }
    };



    const makeBold = () => {
      const selection = window.getSelection();
      let {anchorNode, anchorOffset, focusNode, focusOffset} = selection;
      console.log(selection.toString());
      console.log(`Sel Start ${anchorNode.data}, offset ${anchorOffset}`);
      console.log(`Sel End ${focusNode.data}, offset ${focusOffset}`);
      const bolded =  "**"+selection+"**";    
      let para = anchorNode.data.substring(0,anchorOffset) + bolded + anchorNode.data.substring(focusOffset);
      console.log(para);

    }

  
    return (
      <div className="writeDivContainer">
 <div className="writeBanner">EDIT
 <button onClick={makeBold}>B</button>
 </div>

<span
   className="writeDiv"
  contentEditable
  onInput={handleInput}
  dangerouslySetInnerHTML={{ __html: defaultValue.current }}
/>
      </div>
     
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
