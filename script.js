/*Creo il mio array con object al'interno 
  Creare la mia card in Java 
  Creare una funzione che al click dei dati inseriti la mia carta
   viene stampata sullo schermo */

let cardContainer = document.querySelector(".team-container");
console.log(cardContainer);


let arrayUtenti = [
    {
        nome: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg",
    },

];
console.log(arrayUtenti);
console.log(arrayUtenti[0]);
console.log(arrayUtenti[0].nome);
cardGenerator();


function cardGenerator() {
    for (i = 0; i < arrayUtenti.length; i++) {
        let Utente1 = arrayUtenti[i];
        Utente1.nome;
        Utente1.role;
        Utente1.image;

        //creo la variabile della carta dove inserire il codice html
        let card = `<div class="team-card">
        <div class="card-image">
        <img src="img/${Utente1.image}" alt="Wayne Barnett" />
        </div>
        <div class="card-text">
        <h3>${Utente1.nome}</h3>
        <p>${Utente1.role}</p>
        </div>
        </div>`;
        console.log(card);

        cardContainer.innerHTML += card;
    }
}

//Gestione della card al click 
let btnAdd = document.getElementById("addMemberButton");
console.log(btnAdd);
btnAdd.addEventListener("click", function () {

    //Salvo i miei dati nel form

    let nomeNewUt = document.getElementById("name");
    let roleNewUt = document.getElementById("role");
    let imageNewUt = document.getElementById("image");
    nomeNewUt.value;
    roleNewUt.value;
    imageNewUt.value;

    console.log(nomeNewUt.value);
    console.log(roleNewUt.value);
    console.log(imageNewUt.value);
    let newUtente = {
        nome: nomeNewUt.value,
        role: roleNewUt.value,
        image: imageNewUt.value,
    };
    arrayUtenti.push(newUtente);
    console.log(arrayUtenti);
    //Generare il nuovo utente

    cardContainer.innerHTML = "";
    cardGenerator();
});
