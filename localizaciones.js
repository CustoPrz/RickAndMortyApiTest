const charactersElement = document.getElementById('characters');

fetch('https://rickandmortyapi.com/api/location')
  .then(response => response.json())
  .then(data => {
    const characters = data.results;
    characters.forEach(character => {
      const characterElement = document.createElement('div');
      characterElement.classList.add('character')
      characterElement.innerHTML = `
        <h2>${character.name}</h2>
        <p>Tipo: ${character.type}</p>
        <p>Dimension: ${character.dimension}</p>
      `;
      charactersElement.appendChild(characterElement);
    });
  })
  .catch(error => console.log(error));
