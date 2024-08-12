
export enum TokenType {
    PUNCTUATION,
    WORD,
    WHITE_SPACE
}


export type char={
    char: string,
    inputChar?: string,
    isValid?: boolean
}

export interface Token {
    type: TokenType;
    value: string;
}

// Класс для парсинга текста
export abstract class TextParser {



    static parseText(text: string): Token[] {

        const punctuation = /\p{P}/u;

        const tokens: Token[] = [];
        text.trim();

        let parseText: boolean = false;

        while (text.length > 0) {
            // Сохраняем пробел
            if (text[0].match(/\s+/)) {

                tokens.push({ type: TokenType.WHITE_SPACE, value: text.slice(0,1)});
                parseText = false;
            }
            // Сохраняем знаки пунктуации
            else if (text[0].match(punctuation)) {
                tokens.push({ type: TokenType.PUNCTUATION, value:text.slice(0, 1) });
                parseText = false;
            }
            // Сохраняем слово
            else {
                // Если текущее слово не закончено, добавляем его к последнему токену
                if (parseText) {
                    tokens.at(-1)!.value=tokens.at(-1)!.value + (text.slice(0, 1));

                }
                // Если текущее слово закончено, добавляем его в новый токен
                else {
                    tokens.push({ type: TokenType.WORD, value: text.slice(0, 1) });
                    parseText = true;
                }

            }
            text = text.slice(1);
        }

        return tokens;
    }
}

