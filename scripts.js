const charactersElement = document.getElementById('characters');

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    const characters = data.results;
    characters.forEach(character => {
      const characterElement = document.createElement('div');
      characterElement.classList.add('character')
      characterElement.innerHTML = `
        <h2>${character.name}</h2>
        <img src="${character.image}" alt="${character.name}">
        <p>Estado: ${character.status}</p>
        <p>Especie: ${character.species}</p>
        <p>Origen: ${character.origin.name}</p>
      `;
      charactersElement.appendChild(characterElement);
    });
  })
  .catch(error => console.log(error));
