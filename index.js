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

          const img = document.createElement("img");
          img.src = libro.img;
          img.alt = libro.title;
          img.classList.add("card-img-top");
          img.classList.add("img-fluid");

          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");

          const h5 = document.createElement("h5");
          h5.classList.add("card-title");
          h5.textContent = libro.title;

          const a = document.createElement("a");
          a.href = "#";
          a.classList.add("btn");
          a.classList.add("btn-primary");
          a.textContent = "scarta";

          contenitore.appendChild(col);
          col.appendChild(card);
          card.appendChild(img);
          card.appendChild(cardBody);
          cardBody.appendChild(h5);
          cardBody.appendChild(a);
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
