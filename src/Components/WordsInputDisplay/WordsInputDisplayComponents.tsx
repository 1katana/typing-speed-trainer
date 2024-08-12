import WorkspaceStore from '../store';
import React, { ChangeEvent, FormEvent, ReactNode, useEffect } from 'react';
import InputWords from './InputWords';
import DisplayingWords from './DisplayingWords';



const WordsInputDisplay = () => {

    useEffect(() => {
        WorkspaceStore.fetchData();
        console.log(WorkspaceStore.tokens);
    }, []);

    return (
        <main>
            <InputWords />
            <DisplayingWords />
        </main>

    )


}

export default WordsInputDisplay;