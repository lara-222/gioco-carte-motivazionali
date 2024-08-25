const cards = [
    { message: "Fidati del tuo intuito: è la voce silenziosa della tua saggezza interiore.", color: "#FFB3BA" },
    { message: "Oggi, sfida la tua zona di comfort. Cosa faresti se non avessi paura?", color: "#BAFFC9" },
    { message: "Le tue difficoltà di oggi stanno forgiando la tua forza di domani.", color: "#BAE1FF" },
    { message: "Ascolta il sussurro del tuo cuore: spesso sa cose che la mente ignora.", color: "#FFFFBA" },
    { message: "Ogni decisione è un passo verso il tuo vero sé. Scegli con coraggio.", color: "#FFB3BA" },
    { message: "La tua intuizione è un muscolo: più la usi, più diventa forte.", color: "#BAFFC9" },
    { message: "Ricorda: anche il più piccolo progresso è comunque un passo avanti.", color: "#BAE1FF" },
    { message: "Oggi, sii gentile con te stesso come lo saresti con un caro amico.", color: "#FFFFBA" },
    { message: "Le risposte che cerchi sono già dentro di te. Fai silenzio e ascolta.", color: "#FFB3BA" },
    { message: "Abbraccia l'incertezza: è il terreno fertile per nuove possibilità.", color: "#BAFFC9" },
    { message: "La vita è fatta di momenti: vivi questo con piena consapevolezza.", color: "#BAE1FF" },
    { message: "Lascia andare ciò che non puoi controllare. Concentrati su ciò che puoi influenzare.", color: "#FFFFBA" },
    { message: "Il tuo valore non dipende dalle opinioni altrui. Brilla di luce propria.", color: "#FFB3BA" },
    { message: "Ogni sfida è un'opportunità travestita. Cosa puoi imparare oggi?", color: "#BAFFC9" },
    { message: "Segui la scintilla della tua passione: illuminerà il cammino.", color: "#BAE1FF" },
    { message: "Le tue esperienze passate sono strumenti, non definizioni. Usale saggiamente.", color: "#FFFFBA" },
    { message: "Oggi, scegli la gratitudine. Nota le piccole gioie che ti circondano.", color: "#FFB3BA" },
    { message: "La tua intuizione è la bussola del cuore. Lasciati guidare.", color: "#BAFFC9" },
    { message: "Ricorda: sei l'autore della tua storia. Scrivi un capitolo coraggioso oggi.", color: "#BAE1FF" },
    { message: "Accogli i tuoi sentimenti: sono messaggeri preziosi del tuo mondo interiore.", color: "#FFFFBA" },
    { message: "La vera forza sta nell'essere vulnerabili. Osa mostrarti autenticamente.", color: "#FFB3BA" },
    { message: "Ogni respiro è un nuovo inizio. Cosa scegli di iniziare ora?", color: "#BAFFC9" }
];

const card = document.getElementById('card');
const message = document.getElementById('message');
const drawButton = document.getElementById('draw-card');
const retryButton = document.getElementById('retry');

function drawCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];
    
    message.textContent = selectedCard.message;
    card.querySelector('.card-front').style.backgroundColor = selectedCard.color;
    
    card.style.transform = 'rotateY(180deg)';
    drawButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
}

function retry() {
    card.style.transform = 'rotateY(0deg)';
    drawButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
}

drawButton.addEventListener('click', drawCard);
retryButton.addEventListener('click', retry);