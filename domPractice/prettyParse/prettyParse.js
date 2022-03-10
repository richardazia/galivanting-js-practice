// https://github.com/LinkedInLearning/vanilla-js-DOM-2876283/blob/main/Chapter2/02_01/prettyparse.js
/* eslint no-undef: "error" */
/* eslint-env browser */

document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.querySelector('textarea[name=source]');
    textarea.addEventListener('input', (e) => {
        refreshOutput(e.target.value);
    });

    refreshOutput(textarea.value);
});

function refreshOutput(html) {
    const output = document.querySelector('pp-output');

    output.innerText = '';
    output.appendChild(prettyParse(html));
}

class Lexer {
    constructor(source) {
        this.source = source;
        this.file_pointer = 0;
        this.currentChar = this.source[this.index];
    }

    read() {
        if (this.file_pointer < 0 || this.file_pointer >= this.source.length) {
            return null;
        }

        return this.source[this.file_pointer++];
    }

    rewind() {
        this.file_pointer = 0;
    }

    match(token) {
        return this.remainder.search(token) === 0;
    }

    consumeMatch(token) {
        const match = this.remainder.match(token);

        if (match && match.length && match.index == 0) {
            this.file_pointer += match[0].length;

            return true; // match
        }

        return false; // no match
    }

    readUntil(condition) {
        const start_pointer = this.file_pointer;

        while (!this.eof && !condition(this)){
            this.file_pointer++;
        }

        return this.source.substring(start_pointer, this.file_pointer);
    }

    readIdentifier() {
        return this.readUntil((lexer) => !lexer.match(/\w/));
    }

    skipWhiteSpace() {
        return this.readUntil((lexer) => !lexer.match(/\s/));
    }


    get eof() {
        return this.file_pointer >= this.source.length;
    }

    get remainder() {
        return this.source.substring(this.file_pointer);
    }
}

function prettyParse(html) {
    const lexer = new Lexer(html);

    function parseComment() {
        const comment = lexer.readUntil((lexer) => lexer.match('-->'));
        lexer.consumeMatch('-->');

        return document.createComment(comment);
    }

    function parseElement() {
        const tagName = lexer.readIdentifier();
        const element = document.createElement(tagName);

        // To Do: Parse attributes
        console.log(lexer.readUntil((lexer) => lexer.match(/\/?>/)));

        if (lexer.consumeMatch('>')) {
            element.appendChild(parseContent());

            lexer.consumeMatch('</');
            lexer.readUntil((lexer) => lexer.consumeMatch('>'));
        } else {
            lexer.consumeMatch('/>');
        }

        return element;
    }

    function parseContent() {
        let text = '';
        const fragment = document.createDocumentFragment();

        function flushText() {
            if (text.length) {
                fragment.appendChild(document.createTextNode(text));
                text = '';
            }
        }

        while (!lexer.eof && !lexer.match('</')) {
            if (lexer.consumeMatch('<!--')) {
                flushText();
                fragment.appendChild(parseComment());
            } else if (lexer.consumeMatch('<')) {
                flushText();
                fragment.appendChild(parseElement());
            } else {
                text += lexer.read();
            }
        }
        flushText();

        return fragment;
    }

    return parseContent();
}