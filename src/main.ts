import { createInterface } from "node:readline";
import EvilGuy from "./EvilGuy";
import SuperHero from "./SuperHero";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const hero: SuperHero = new SuperHero("Superman", 100, ["Kick", "Punch", "Kick"], [10, 20, 30]);
const evil: EvilGuy = new EvilGuy("Shaykos", 100);

const menu = "1. Print all \n2. Evil Attack \n3. Hero Attack \n4. Rest (Power up)\n";

function promptUser() {
    console.log(menu);
    rl.question("Enter your choice: ", (choice) => {
        switch (choice) {
            case '1':
                hero.Rest();
                evil.AddCriminals(1);
                console.log(hero.toString());
                console.log(evil.toString());
                rl.question("Press any button to continue: ", () => { });
                break;
            case '2':
                hero.power = hero.power - evil.Attack;
                console.log("Evil attacks! hero suffers " + evil.Attack + " damage");
                rl.question("Press any button to continue: ", () => { });
                break;
            case '3':
                let attackChoice = Math.floor(Math.random() * 3);
                evil.power = evil.power - hero.GetDamage(attackChoice);
                
                console.log("Hero" + hero.GetAttack(attackChoice)+ "! Evil suffers " + hero.GetDamage(attackChoice) + " damage");
                rl.question("Press any button to continue: ", () => { });
                break;
            case '4':
                hero.Rest();
                evil.AddCriminals(1);
                console.log("Hero and villain rests");
                rl.question("Press any button to continue: ", () => { });
                break;
        }

        if (hero.power > 1 && evil.power > 1) {
            promptUser();  // Continue the loop
        } else {
            rl.close();
            console.log("Game over.");
            console.log(hero.power == 0? "Hero died" : "Hero survived");
            
        }
    });
}

promptUser();
