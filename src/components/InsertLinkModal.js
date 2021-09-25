import React, { useContext, useRef, useState } from 'react';
import Modal from './Modal';

function InsertLinkModal(props) {

    const [modalToggle, setModalToggle] = useState(false);
    const [modalLinkName, setModalLinkName] = useState("");
    const [modalLinkText, setModalLinkText] = useState("");

    const modalToggler = () => {
        setModalToggle(!modalToggle);
    }


    const handleURLSubmit = (event) => {

        const imageURL = modalLinkText ? `[${modalLinkText}](${modalLinkName})` :  `[${modalLinkName}](${modalLinkName})` ;
        console.log(imageURL);
        props.setNameFromRef(props.textArea.current.value);
        props.textArea.current.setRangeText(` ${imageURL} `);
        props.dispatch({type:"text", data: props.textArea.current.value});
    }

    return (
        <div className="div-container">
            <button onClick={e => modalToggler(e)} ><i class="fas fa-link"></i></button> 
      <Modal show={modalToggle} onClose={e => modalToggler(e)}>
        <h1>Insert Image From URL</h1>
        <label>Link Text (Optional) </label>
        <input
         type="text"
         value={modalLinkText}
         name="modalLinkText"
         onChange={e => setModalLinkText(e.target.value)}
         >
        </input>

        <label>Link Name</label>
        <input
         type="text"
         value={modalLinkName}
         name="modalLinkName"
         onChange={e => setModalLinkName(e.target.value)}
         >
        </input>
        <button className="modal-submit" onClick={e => handleURLSubmit(e)}>submit</button>
      </Modal>
        </div>
    )
}

export default InsertLinkModal
