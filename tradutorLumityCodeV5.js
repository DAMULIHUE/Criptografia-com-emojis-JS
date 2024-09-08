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
    'z': "👠",
    ' ': " "
};

let result = '';    
let caracterInvalid = 0;
const GraphemeSplitter = require('grapheme-splitter');
const splitter = new GraphemeSplitter();


function criptografar(frase = "meus"){

    frase = frase.toLowerCase();
    let fr = Object.entries(frase);
    
    fr.forEach(i =>{
        
        if(alfabeto.hasOwnProperty(i[1]) && caracterInvalid == 0){
            result += alfabeto[i[1]];
        }else if (caracterInvalid == 0){
            console.log(`insira um valor válido: ${i[1]}`);
            result = null;
            caracterInvalid++;
        }
    });

    console.log(result);
}

function descriptografar(frase = "🦇🌜☀️ewfdv"){

    let entries = Object.entries(alfabeto).map(([key, val]) => [val, key]);
    let graphemes = splitter.splitGraphemes(frase);
    let alfabetoEmoji = Object.fromEntries(entries);
    
    graphemes.forEach(i =>{

        if(alfabetoEmoji.hasOwnProperty(i) && caracterInvalid == 0){
            result += alfabetoEmoji[i];
        }else if (caracterInvalid == 0){
            console.log(`insira um valor válido: ${i}`);
            result = null;
            caracterInvalid++;
        }
    });

    
    console.log(result);
}
criptografar('bom dia princesa');