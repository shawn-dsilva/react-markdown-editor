import React, { useContext, useRef, useState } from 'react';
import { store } from '../store';
import sanitizeHtml from 'sanitize-html';

const ContentEditableWithRef = (props) => {
    const defaultValue = useRef(props.value);
  
    const handleInput = (event) => {

      if (props.onChange) {
        props.onChange(event.target.innerHTML);
        const text = event.target.innerHTML
        let noHTMLData = text.replace(/(<([^>]+)>)/gi, "  \n");
        console.log(noHTMLData);
        props.dispatch({type:"text", data: noHTMLData});
      }
    };





  
    return (
      <div className="writeDivContainer">
 <div className="writeBanner">EDIT
 <button onClick={props.textTransform}>B</button>
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
    const [nameFromRef, setNameFromRef] = useState(``);

    const makeBold = () => {
      // const selection = window.getSelection();
      // let {anchorNode, anchorOffset, focusNode, focusOffset} = selection;
      // console.log(selection.toString());
      // var range = selection.getRangeAt(0);
      // var start = range.startOffset;
      // var end = range.endOffset;
      // console.log(`Sel Start ${anchorNode.data}, offset ${anchorOffset}`);
      // console.log(`Sel End ${focusNode.data}, offset ${focusOffset}`);
      // const bolded =  "**"+selection+"**";    
      // let start = nameFromRef.substring(anchorOffset);
      // let end = focusNode.data.substring(focusOffset);
      // let para = start + bolded + end;
      // console.log(anchorNode);
      // console.log(focusNode);
      // console.log(selection.toString());
      // console.log(para);
      // dispatch({type:"text", data: para});

      
    var offset = 0;
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var start = range.startOffset;
    var end = range.endOffset;

    if ( selection.baseNode.parentNode.hasChildNodes() ) { 
        for ( var i = 0 ; selection.baseNode.parentNode.childNodes.length > i ; i++ ) { 
            var cnode = selection.baseNode.parentNode.childNodes[i];
            if (cnode.nodeType == document.TEXT_NODE) {
                if ( (offset + cnode.length) > start) {
                    break;
                }   
                offset = offset + cnode.length;
            }   
            if (cnode.nodeType == document.ELEMENT_NODE) {
                if ( (offset + cnode.textContent.length) > start) {
                    break;
                }   
                offset = offset + cnode.textContent.length;
            }   
        }   
    }   

    start = start + offset;
    end = end + offset;

    console.log(selection.baseNode.parentNode.childNodes);

    console.log("START: "+start);
    console.log("END: "+end);
    }

    const onChange = (event) => {
      let text = event.target.value
      setNameFromRef(text);
      text = text.replace(/\n/g, `  \n`);
      console.log(text);
      dispatch({type:"text", data: text});

    }


    return (
      <div className="writeDivContainer">
      <div className="writeBanner">EDIT
      </div>
        <textarea className="writeDiv" value={nameFromRef}  onChange={onChange}   />
      </div>
    )
}

export default WriteDiv;
