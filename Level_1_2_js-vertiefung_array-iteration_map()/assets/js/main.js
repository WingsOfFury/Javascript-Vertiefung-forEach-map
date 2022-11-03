/*
In dieser Übung werden wir map() lernen.

Nutze das Array Getraenke aus dem Kommentarbereich.
Nutze die map()-Methode um in der neuen Variablen upperDrinks alle Getränke in Großbuchstaben zu speichern.
Wende nun diese map() Funktion an deinem Array getraenke an.
Gib nun upperDrinks in der Konsole aus.

Bonus: Versuche, deine Funktion in ArrowFunction umzuwandeln.
*/



let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];

let upperDrinks = getraenke.map(function(element){
    return(element.toUpperCase())
});
console.log(upperDrinks);


