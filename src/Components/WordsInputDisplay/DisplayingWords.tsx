import WorkspaceStore from '../store';
import React, { useEffect } from 'react';

import { observer } from 'mobx-react-lite';


const DisplayingWords = observer(() => {
    return (
        <>
            {WorkspaceStore.tokens.map((word, index) => (
                <span key={index}>{word.value} </span>
            ))}
        </>
    );
});

export default DisplayingWords;