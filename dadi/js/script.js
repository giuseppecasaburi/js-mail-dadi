// GENERATORE NUMERICO
const randomNumbUser = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log (randomNumbUser);

const randomNumbCPU = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log (randomNumbCPU);


// ALGORITMO DI CONFRONTO E ASSEGNAZIONE VITTORIA
if (randomNumbUser > randomNumbCPU) {
    console.log ("Hai vinto, complimenti")

} else if (randomNumbUser === randomNumbCPU) {
    console.log ("Oh peccato, c'è stato un pareggio. Ritenta.")
} else {
    console.log ("Ops.. Hai perso. Ritenta, sarai più fortunato!!")
}