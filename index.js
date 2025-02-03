import { question } from "readline-sync";

const riddle = question("Wo findest du Wälder ohne Bäume, Flüsse ohne Wasser und Städte ohne Häuser?");
const solution = "landkarte";

let versuche = 3;

while(versuche > 0) {
    let answer = readline.question(riddle + " ");

    if(answer.toLowercase() === solution){
        console.log("Du hast das Rätsels Lösung!");
        break;
    } else {
        versuche--;
        if( versuche > 0) {
            console.log();
        }
    }
}


