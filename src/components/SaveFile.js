import React from 'react'

function SaveFile(props) {

    const clickHandler = () => {
        localStorage.setItem('document', props.value);
    }

    return (
        <div className="div-container">
     <button onClick={ () => clickHandler()}>{props.icon}</button>
        </div>
    )
}

export default SaveFile
