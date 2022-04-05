

let prenoms = ["Alain", "Maurice", "Mohamed", "Sophie", "Marie", "Rokhaya", "Omar"];
let noms = ["Diop", "Cesar", "Sall", "Janvier", "Ndiaye", "Fall", "Caoui"];

const genererNom = () => {

   let prenomsAleatoirs = prenoms[Math.floor(Math.random()*prenoms.length)];
   let nomsAleatoirs = noms[Math.floor(Math.random()*noms.length)];
   let nomComplet = prenomsAleatoirs + " "+nomsAleatoirs;
   return nomComplet;  

}



const quantite = () => {

    let qty = document.querySelector(".qty").value;
    document.querySelector(".nameList").innerHTML = " ";

    if(qty > 10 || qty < 1) {
       document.querySelector(".nameList").innerHTML = "Saisissez un nombre compris entre 1 et 10 pour generer des noms complets";
       
    }
    else {
            for(let i = 0; i < qty; i++){

                document.querySelector(".nameList").innerHTML += genererNom() + "<br>";
            }
    }
}