import { question } from "readline-sync";

const riddle = question("Wo findest du Wälder ohne Bäume, Flüsse ohne Wasser und Städte ohne Häuser?");
const answer = "landkarte";

let versuche = 3;

while(versuche > 0) {
    let answer = readline.question(riddle + " ");
}
