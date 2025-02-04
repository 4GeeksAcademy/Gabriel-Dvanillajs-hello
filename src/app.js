import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  function randomCard() {
    let card = document.createElement("div");
    card.style.width = "250px";
    card.style.height = "350px";
    card.style.backgroundColor = "white";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.alignItems = "center";
    card.style.justifyContent = "space-between";
    card.style.margin = "auto";
    card.style.border = "1px solid black";
    card.style.borderRadius = "10px";
    card.style.padding = "10px";
    card.style.position = "absolute";
    card.style.top = "50%";
    card.style.left = "50%";
    card.style.transform = "translate(-50%, -50%)"; 
    document.body.appendChild(card);

    let SuitTop = document.createElement("div");
    SuitTop.style.position = "absolute";
    SuitTop.style.top = "10px";
    SuitTop.style.left = "10px";
    SuitTop.style.fontSize = "60px";

    let SuitBottom = document.createElement("div");
    SuitBottom.style.position = "absolute";
    SuitBottom.style.bottom = "10px";
    SuitBottom.style.right = "10px";
    SuitBottom.style.fontSize = "60px";
    SuitBottom.style.transform = "rotate(180deg)";

    let DivNum = document.createElement("div");
    DivNum.style.fontSize = "80px";
    DivNum.style.fontWeight = "bold";
    DivNum.style.marginTop = "100px";

    const Number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const Suit = ["♠", "♣", "♥", "♦"];

    let randomNum = Math.floor(Math.random() * Number.length);
    let randomSuit = Math.floor(Math.random() * Suit.length);

    let cardNumber = Number[randomNum];
    let cardSuit = Suit[randomSuit];

    let cardColor = (cardSuit === "♥" || cardSuit === "♦") ? "red" : "black";

    SuitTop.innerHTML = cardSuit;
    SuitBottom.innerHTML = cardSuit;
    DivNum.innerHTML = cardNumber;

    SuitTop.style.color = cardColor;
    SuitBottom.style.color = cardColor;
    DivNum.style.color = cardColor;

    card.appendChild(SuitTop);
    card.appendChild(DivNum);
    card.appendChild(SuitBottom);
  };
  randomCard();
  
  setInterval(randomCard, 2000);
};
