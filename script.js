function getPika() {
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);

      //Getting all data necessary
      const id = data.id;
      const name = data.name;
      const image = data.sprites.front_default;
      const type = data.types[0].type.name;

      const wrapChecker = document.getElementsByTagName("div")[0];

      if (wrapChecker == undefined) {
        //Creating elements
        const body = document.getElementsByTagName("body")[0];
        const wrapper = document.createElement("div");
        const head = document.createElement("h2");
        const img = document.createElement("img");
        const typePoke = document.createElement("p");

        //Update element content
        wrapper.id = "wrapper";
        img.src = image;
        head.innerText = `${id}: ${name}`;
        typePoke.innerText = `Type: ${type}`;

        //Add element to wrapper
        body.appendChild(wrapper);
        wrapper.appendChild(head);
        wrapper.appendChild(img);
        wrapper.appendChild(typePoke);
      }
    });
}
