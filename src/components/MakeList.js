import React from 'react'

function MakeList(props) {

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
            <button onClick={ () => clickHandler()}>{props.icon}</button>
    )
}

export default MakeList
