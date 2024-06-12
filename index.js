const personaggi = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((responseObj) => {
      if (responseObj.ok) {
        return responseObj.json();
      } else {
        throw new Error("errore");
      }
    })

    .then((libriObj) => {
      const contenitore = document.getElementById("card-container");

      if (libriObj) {
        libriObj.forEach((libro) => {
          const col = document.createElement("div");
          col.classList.add("col");
          const card = document.createElement("div");
          card.classList.add("card");

          card.innerHTML = `
           <img src=${libro.img} class="card-img-top img-fluid" alt=${libro.title}>
                        <div class="card-body">
                            <h5 class="card-title">${libro.title}</h5>
                            
                            <a href=${libro.sourceUrl} class="btn btn-primary">Go to ${libro.title}</a>
                        </div> 
                        `;
          col.appendChild(card);
          contenitore.appendChild(col);
        });
      } else {
        console.log("dati non validi");
      }
    })

    .catch((err) => console.log(err));
};

window.addEventListener("DOMContentLoaded", () => {
  personaggi();
});
