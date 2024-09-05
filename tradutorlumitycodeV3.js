const alfabeto = {
    'a': "🦇",
    'b': "⛰️",
    'c': "🦀",
    'd': "🌮",
    'e': "🎹",
    'f': "📊",
    'g': "🍤",
    'h': "🌴",
    'i': "🛑",
    'j': "🐬",
    'k': "🥁",
    'l': "✅",
    'm': "🌜",
    'n': "🐍",
    'o': "☀️",
    'p': "🧢",
    'q': "🎺",
    'r': "📈",
    's': "⚡",
    't': "☂️",
    'u': "↩️",
    'v': "🚩",
    'w': "🌛",
    'x': "⚔️",
    'y': "☔",
    'z': "👠"
};

const GraphemeSplitter = require('grapheme-splitter');
const splitter = new GraphemeSplitter();

function criptografar(frase = "amo minha mulher"){

    frase = frase.toLowerCase();
    
    for(let i = 0; i < frase.length; i++){
        if(alfabeto.hasOwnProperty(frase[i])){
            frase = frase.replace(frase[i], alfabeto[frase[i]])
        }
    }

    return console.log(frase);
}

function descriptografar(frase = "🦇🌜☀️"){

    let entries = Object.entries(alfabeto).map(([key, val]) => [val, key]);
    //inverte a posição de par chave(key) e valor(val)...
    //transformando assim 'entries' em uma matriz.
    const alfabetoEmoji = Object.fromEntries(entries);
    //transforma a mtriz em um objeto par chave(key) valor(val).

    let result = '';
    //variavel que sera a tradução final.
    let graphemes = splitter.splitGraphemes(frase);
    // garante que emojis sejam tratados como uma unica unidade.

    for (let i = 0; i < graphemes.length; i++) {

        let char = graphemes[i];
        // grphemes é a nossa frase porém com cada emoji sendo 1 unidade.
        if (alfabetoEmoji.hasOwnProperty(char)) {
        //se 'char' estiver dentro de 'alfabetoEmoji'...
            result += alfabetoEmoji[char];
            //escreva a letra correspondete ao emoji na var result.
        } else {
        //se 'char' não estiver no 'alfabetoEmoji'...
            result += char;
            //deixe o emoji sem tradução
        }
    }

    return console.log(result);
    //imprime o resultado da tradução.
}

criptografar("te amo um bazilhao de bazilhoes");
descriptografar('☂️🎹 🦇🌜☀️ ↩️🌜 ⛰️🦇👠🛑✅🌴🦇☀️ 🌮🎹 ⛰️🦇👠🛑✅🌴☀️🎹⚡');