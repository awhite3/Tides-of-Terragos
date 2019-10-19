window.onload = function () {

    document.getElementById("button1").addEventListener("click", addDeck);    
}

function addDeck() {
    document.getElementById("deckP").innerHTML = "<br>" + document.getElementById("decklist").value;
}
