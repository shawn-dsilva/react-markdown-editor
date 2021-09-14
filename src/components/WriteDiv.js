import React, { useContext, useRef } from 'react';
import { store } from '../store';
import ContentEditable from 'react-contenteditable'

function WriteDiv() {
    const globalState = useContext(store);
    const { dispatch } = globalState;

    const text = useRef('');

    const handleChange = evt => {
        text.current = evt.target.value;
        dispatch({type: "text", data: text.current});
    };

    const handleBlur = () => {
        console.log(text.current);
    };

    return (
<ContentEditable className="writeDiv" html={text.current} onBlur={handleBlur} onChange={handleChange} />

    )
}

export default WriteDiv;
