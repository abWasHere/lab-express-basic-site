// var getAll = document.getElementById('get-all');
// var container = document.getElementById('container');

function displayAll() {
   axios
      .get('https://anapioficeandfire.com/api/characters')
      .then((response) => {
         let allCharacters = response.data.results;
         allCharacters.forEach((character) => {
            displayCharacter(character.url);
         });
         console.log(response);
      })
      .catch((error) => {
         console.log(error);
      });
}

function displayCharacter(url) {
   axios
      .get(url)
      .then((result) => {
         console.log(result.data);
         container.innerHTML += `<div class="character"> 
         <h1>${result.data.name}</h1>
         <img src="${result.data.sprites.front_default}" /> 
         </div>`;
      })
      .catch((error) => {
         console.log(error);
      });
}

module.exports = displayAll

// getAll.onclick = displayAll;
