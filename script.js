const wrapper = document.querySelector(".wrapper");
const input = document.querySelector("#input_txt");
const btn = document.querySelector("#button-addon2");
const info = wrapper.querySelector(".info");
const synonyms = wrapper.querySelector(".synonyms .list")

const fetchWord = async (word) => {
    const APIResponse = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    
    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        console.log(data)
        return data
    }
    
}



const renderWord = async (word) => {

    const data = await fetchWord(word);

    if (data){
        wrapper.classList.add("active")
        let definition = data[0].meanings[0].definitions[0],
        phonetics =  `${data[0].meanings[0].partOfSpeach} / ${data[0].phonetics[0].text}/`;



        document.querySelector(".word p").innerHTML = data[0].word;
        document.querySelector(".word span").innerHTML = phonetics;
        document.querySelector(".meaning span").innerHTML = definition.definition;
        document.querySelector(".example span").innerHTML = definition.example;

        for(let i = 0; i<5; i++){
            let tag = `<span>${definition.synonyms[i]}</span>/ `
            synonyms.insertAdjacentHTML("beforeend", tag);
        }

        

              
    }else {
        
        info.innerHTML = 'not found ☹️'
    }
    
}

btn.addEventListener('click', () => {
    renderWord(input.value);
} )