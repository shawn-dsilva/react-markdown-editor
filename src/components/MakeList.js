import React, {useState,useEffect} from 'react'
import Tooltip from './Tooltip';

function MakeList(props) {

    const [tooltipText, setTooltipText] = useState("");

    useEffect(() => { 
      if(props.type === "ol") {
        setTooltipText("ordered list");
      } else if (props.type === "ul") {
        setTooltipText("unordered list");
      } else if (props.type === "qt") {
        setTooltipText("quote");
      }
      }, [])

    const clickHandler = () => {
        let textArea = props.textArea.current;
        if (textArea.selectionStart === textArea.selectionEnd) {
          return; // nothing is selected
        }
      
        let selected = textArea.value.slice(textArea.selectionStart, textArea.selectionEnd);
        selected = selected.split("\n");
        if(props.type === "ol") {
            for(let i = 0; i < selected.length; i++) {
                selected[i] = `${i}. ${selected[i]}\n`;
            }
        } else if (props.type === "ul") {
            for(let i = 0; i < selected.length; i++) {
                selected[i] = `- ${selected[i]}\n`;
            } 
        }  else if (props.type === "qt") {
            for(let i = 0; i < selected.length; i++) {
                selected[i] = `> ${selected[i]}\n`;
            } 
        } 
  
  
        textArea.setRangeText(` ${selected.join("")} `);
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

export default MakeList
