import { makeAutoObservable } from 'mobx';
import {TextParser,Token,TokenType} from './parser';
import exampleText from './provider';

interface TokenWrapper extends Token {
    inputToken?:string;
    valid?: boolean;
}

class WorkspaceStore {

    tokens: TokenWrapper[] = [];

    activeTokenIndex = 0;

    constructor() {
        makeAutoObservable(this);
    }

    fetchData() {
        //Загрузка текта
        this.tokens = TextParser.parseText(exampleText);

    }

    setWords(char: string): void {
        
    }

    getWords() {

    }


}

export default new WorkspaceStore();