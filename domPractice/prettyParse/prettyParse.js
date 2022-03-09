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
    testLexer(html);
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


    get eof() {
        return this.file_pointer >= this.source.length;
    }

    get remainder() {
        return this.source.substring(this.file_pointer);
    }
}

function testLexer(html) {
    const lexer = new Lexer(html);

    let output = '';

    while (!lexer.eof) {
        output += lexer.read(); 
    }

    console.assert(output === html);
    // console.assert(html != output); //Checks that code is being run

    lexer.rewind();

    console.assert(lexer.match('<!--'));
    console.assert(!lexer.match('random text'));

    console.assert(lexer.consumeMatch('<!--'));
}