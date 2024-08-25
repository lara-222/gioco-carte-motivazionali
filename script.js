const cards = [
    "Fidati del tuo intuito: è la voce silenziosa della tua saggezza interiore.",
    "Oggi, sfida la tua zona di comfort. Cosa faresti se non avessi paura?",
    "Le tue difficoltà di oggi stanno forgiando la tua forza di domani.",
    "Ascolta il sussurro del tuo cuore: spesso sa cose che la mente ignora.",
    "Ogni decisione è un passo verso il tuo vero sé. Scegli con coraggio.",
    "La tua intuizione è un muscolo: più la usi, più diventa forte.",
    "Ricorda: anche il più piccolo progresso è comunque un passo avanti.",
    "Oggi, sii gentile con te stesso come lo saresti con un caro amico.",
    "Le risposte che cerchi sono già dentro di te. Fai silenzio e ascolta.",
    "Abbraccia l'incertezza: è il terreno fertile per nuove possibilità.",
    "La vita è fatta di momenti: vivi questo con piena consapevolezza.",
    "Lascia andare ciò che non puoi controllare. Concentrati su ciò che puoi influenzare.",
    "Il tuo valore non dipende dalle opinioni altrui. Brilla di luce propria.",
    "Ogni sfida è un'opportunità travestita. Cosa puoi imparare oggi?",
    "Segui la scintilla della tua passione: illuminerà il cammino.",
    "Le tue esperienze passate sono strumenti, non definizioni. Usale saggiamente.",
    "Oggi, scegli la gratitudine. Nota le piccole gioie che ti circondano.",
    "La tua intuizione è la bussola del cuore. Lasciati guidare.",
    "Ricorda: sei l'autore della tua storia. Scrivi un capitolo coraggioso oggi.",
    "Accogli i tuoi sentimenti: sono messaggeri preziosi del tuo mondo interiore.",
    "La vera forza sta nell'essere vulnerabili. Osa mostrarti autenticamente.",
    "Ogni respiro è un nuovo inizio. Cosa scegli di iniziare ora?"
];

const cardMessage = document.getElementById('card-message');
const drawButton = document.getElementById('draw-card');

function drawCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    cardMessage.textContent = cards[randomIndex];
}

drawButton.addEventListener('click', drawCard);