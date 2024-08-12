import WorkspaceStore from '../store';
import React, { ChangeEvent, FormEvent, ReactNode, useEffect } from 'react';


const InputWords = () => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        WorkspaceStore.setWords(value);
    };

    return (
        <input type="text" onChange={handleChange} />
    )

}

export default InputWords;