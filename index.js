import { question } from "readline-sync";

const riddle = "Wo findest du Wälder ohne Bäume, Flüsse ohne Wasser und Städte ohne Häuser? ";
const solution = "landkarte";

let versuche = 3;

while(versuche > 0) {
    let answer = question(riddle + " ");

    if(answer.toLowerCase() === solution){
        console.log("Du hast das Rätsels Lösung!");
        break;
    } else {
        versuche--;
        if( versuche > 0) {
            console.log(`Nein! Veruche es noch einmal. Du hast noch ${versuche}`);
        } else {
            console.log("Leider falsch! HA HA HA! Du wirst es niemals lösen können!");
        }
    }
}


