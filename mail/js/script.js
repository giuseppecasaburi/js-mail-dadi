// ARRAY DELLE EMAIL ALLE QUALI E' CONSENTITO L'ACCESSO
const mailList = ["enzobiondi0000@libero.it", "mariocasabur70@gmail.com", "giuseppe.casaburi96@gmail.com", "saettamcqueen@libero.it"];

// INPUT USER EMAIL
const userMail = prompt("Inserisci il tuo indirizzo email");

// ALGORITMO DI RISOLUZIONE
let mailApproved = false;
for (let i = 0; i <= mailList.length; i++) {
    if (userMail === mailList[i]) {
        mailApproved = true;
        break;
    }
}

if (mailApproved === true) {
    console.log("La tua email è presente in lista, quindi ti è consentito l'accesso");
} else {
    console.log("La tua mail non è presente in lista, mi dispiace ma non puoi entrare.")

}