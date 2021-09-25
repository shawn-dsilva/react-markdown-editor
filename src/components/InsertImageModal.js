import React, { useContext, useRef, useState } from 'react';
import Modal from './Modal';

function InsertImageModal(props) {

    const [modalToggle, setModalToggle] = useState(false);
    const [modalInputName, setModalInputName] = useState("");

    const modalToggler = () => {
        setModalToggle(!modalToggle);
    }

    const handleInputChange = (event) => {
        setModalInputName(event.target.value);
    }

    const handleURLSubmit = (event) => {
        const imageURL = `![](${modalInputName})`
        props.setNameFromRef(props.textArea.current.value);
        props.textArea.current.setRangeText(` ${imageURL} `);
        props.dispatch({type:"text", data: props.textArea.current.value});
    }

    return (
        <div className="div-container">
            <button onClick={e => modalToggler(e)} ><i class="far fa-image"></i></button> 
      <Modal show={modalToggle} onClose={e => modalToggler(e)}>
        <h1>Insert Image From URL</h1>
        <input
         type="text"
         value={modalInputName}
         name="modalInputName"
         onChange={e => handleInputChange(e)}
         >
        </input>
        <button className="modal-submit" onClick={e => handleURLSubmit(e)}>submit</button>
      </Modal>
        </div>
    )
}

export default InsertImageModal
