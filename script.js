let likeme = document.getElementById("cardo");
let large = document.getElementById("large")

function search(){
    let urlDictionary = "https://api.dictionaryapi.dev/api/v2/entries/en/" + large.value;
    let carto = "";
    fetch(urlDictionary)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for(let i = 0; i < data.length; i++){
            carto += `
           <h5 class="card-title">WORD:  ${data[i].word}</h5>
           <p class="card-text">PHONETIC:  ${data[i].phonetic}</p>
           <p class="card-text">PART OF SPEECH:  ${data[i].meanings[i].partOfSpeech}</p>
           <p class="card-text">SYNONMS: ${data[i].meanings[i].synonyms}</p>
           <p class="card-text">EXAMPLE: ${data[i].meanings[i].definitions[0].example}
           <p class="card-text">MEANINGS: ${data[i].meanings[i].definitions[0].definition}`
                
         likeme.innerHTML = carto;   
        }
        
        // console.log(data)
    })   
   

}