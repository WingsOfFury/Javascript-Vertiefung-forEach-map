/*
In dieser Übung werden wir forEach() lernen.

Schreibe eine Funktion myDrinks(), die jedes Element eines Arrays in deiner Konsole ausgibt und mit document.write() in deine index.html schreibt.

Verwende die Liste aus dem Kommentar.
Sortiere getraenke vorher alphabetisch.
*/


let myDrinks = [
    "Coca-Cola",
    "Apfelsaft ",
    "Pepsi ",
    "Traubensaft ",
    "Sprite ",
    "Orangensaft ",
    "Red Bull Energy Drink ",
    "Fanta "
];
console.log(myDrinks);

myDrinks.forEach((index) => {
    myDrinks.sort();
    document.write(index);
});