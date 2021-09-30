import React, {useContext} from 'react'
import { store } from '../store';


function SaveFile(props) {
    


    const clickHandler = () => {
        // props.dispatch({type:"saving", data: true})
        props.setIsSaving(true);
        localStorage.setItem('document', props.value);
        const timer = setTimeout(() => {
            console.log('This will run after 1 second!')
            props.setIsSaving(false);
          }, 1000);
        // clearTimeout(timer);

    }

    return (
        <div className="div-container">
     <button onClick={ () => clickHandler()}>{props.icon}</button>
        </div>
    )
}

export default SaveFile
