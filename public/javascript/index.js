const charactersAPI = new APIHandler('http://localhost:8001');

window.addEventListener('load', () => {
  
  document.getElementById('fetch-all').addEventListener('click', function () {
    charactersAPI.getFullList().then((allCharacters)=> {
      const parentDiv = document.querySelector(".characters-container");
      const hiddenDivOnFetch = document.getElementById(
        "character-info-to-hide"
      );
    allCharacters.forEach((character)=> {
      let oneCharacter = document.createElement("div");
      oneCharacter.className = "character-info";

      //Mostrar nombre
      let newDivName = document.createElement("div");
      newDivName.classList.add("name");
      newDivName.innerHTML = `Name: ${character.name}`;
      oneCharacter.appendChild(newDivName);

      parentDiv.appendChild(oneCharacter);
    });
    hiddenDivOnFetch.style.display = "none";
  });
});

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
