import Player from "./models/Player";
import Game from "./models/Game";

const Player1 = new Player("Player1");
const Player2 = new Player("Player2");

const game = new Game([Player1, Player2]);
const winner = game.play();
console.log("The winner is: " + winner?.username);
