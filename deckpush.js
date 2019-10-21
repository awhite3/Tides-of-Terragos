window.onload = function () {

    document.getElementById("button1").addEventListener("click", addDeck);    
}

function addDeck() {
    window.alert(document.getElementById("decklist").value);
    document.getElementById("deckP").innerHTML = document.getElementById("decklist").value;
}
