"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EvilGuy_1 = require("./EvilGuy");
var SuperHero_1 = require("./SuperHero");
var node_readline_1 = require("node:readline");
var rl = (0, node_readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
var hero = new SuperHero_1.default("Superman", 100, ["Kick", "Punch", "Kick"], [10, 20, 30]);
var evil = new EvilGuy_1.default("Shaykos", 100);
var menu = "1. Print all \n2. Evil Attack \n3. Hero Attack \n4. Rest (Power up)\n";
function promptUser() {
    console.log(menu);
    rl.question("Enter your choice: ", function (choice) {
        switch (choice) {
            case '1':
                console.log(hero.toString());
                console.log(evil.toString());
                break;
            case '2':
                evil.Attack = evil.Attack + evil.Criminals;
                console.log("Evil attacks!");
                break;
        }
        if (hero.power > 1 && evil.power > 1) {
            promptUser(); // Continue the loop
        }
        else {
            rl.close();
            console.log("Game over.");
        }
    });
}
promptUser();
