import React, {useState,useEffect} from 'react'
import Tooltip from './Tooltip';

function TextTransform(props) {

  const [tooltipText, setTooltipText] = useState("");

  useEffect(() => { 
    if(props.operator === "b") {
      setTooltipText("bold");
    } else if (props.operator === "i") {
      setTooltipText("italic");
    } else if (props.operator === "c") {
      setTooltipText("code");
    }
    }, [])

    const clickHandler = () => {
        let textArea = props.textArea.current;
        if (textArea.selectionStart === textArea.selectionEnd) {
          return; // nothing is selected
        }
      
        let selected = textArea.value.slice(textArea.selectionStart, textArea.selectionEnd);
        
        let wrapAround = ""
        if(props.operator === "b") {
          wrapAround = "**";
        } else if (props.operator === "i") {
          wrapAround = "*";
        } else if (props.operator === "c") {
          wrapAround = "\n```\n";
        }
  
  
        textArea.setRangeText(` ${wrapAround}${selected}${wrapAround} `);
        console.log(`${textArea.value}`);
        props.setNameFromRef(textArea.value);
        props.dispatch({type:"text", data: textArea.value});
      }
  
    return (
      <Tooltip text={tooltipText}>
        <button onClick={ () => clickHandler()}>{props.icon}</button>
        </Tooltip>
    )
}

export default TextTransform
