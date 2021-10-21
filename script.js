/*Creo il mio array con object al'interno 
  Creare la mia card in Java 
  Creare una funzione che al click dei dati inseriti la mia carta
   viene stampata sullo schermo */

let arrayTeam = [

    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "img/barbara-ramos-graphic-designer.jpg"
    },

]

console.log(arrayTeam);
console.log(arrayTeam[0]);
console.log(arrayTeam[0].name);
console.log(arrayTeam[0]["role"]);