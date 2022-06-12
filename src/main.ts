import Player from "./models/Player";

console.log("Username: ");
process.stdin.on("data", (data) => {
  const Player1 = new Player(data.toString());
  console.log(Player1.username);
});
