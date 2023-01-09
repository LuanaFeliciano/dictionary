const btn = document.querySelector("#button-addon2");
const input = document.querySelector("#input_txt");
const word_name = document.querySelector("#word");
const meanings = document.querySelector(".meanings");
const definition = document.querySelector("#definition-word");
const error = document.querySelector("#error");
const example = document.querySelector("#example-1");
const audio = document.querySelector("#audio");

let palavra = 'hello'
const fetchWord = async (word) => {
    const APIResponse = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    
    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        console.log(data)
        return data
    }
    
}


const renderWord = async (word) => {

    error.innerHTML = '';

    const data = await fetchWord(word);

    if (data){
        audio.src = ''
        document.querySelector()
        word_name.innerHTML = data[0].word;
        definition.innerHTML = data[0].meanings[0].definitions[0].definition;
        audio.src = data[0].phonetics[1].audio;

        if(data[0].meanings[0].definitions[0].example === undefined){
            example.innerHTML = 'No examples of this word were found';
        }else{
            example.innerHTML = data[0].meanings[0].definitions[0].example
        }
              
    }else {
        error.innerHTML = 'not found ☹️'
        
    }
    
}

btn.addEventListener('click', () => {
    renderWord(input.value);
} )

function play(){
    audio.play();
}

renderWord(palavra)