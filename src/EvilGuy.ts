import Person from "./Person";

export default class EvilGuy extends Person {
    private criminals: number = 0;
    private isAttacking: boolean = false;
    private attack: number = 20;

    constructor(name: string, power: number) {
        super(name, power);
    }

    get Criminals() {
        return this.criminals;
    }
    get IsAttacking() {
        return this.isAttacking;
    }
    get Attack() {
        return this.attack;
    }
    set Criminals(criminals: number) {
        this.criminals = criminals;
    }
    set IsAttacking(isAttacking: boolean) {
        this.isAttacking = isAttacking;
    }
    set Attack(attack: number) {
        this.attack = attack;
    }

    AddCriminals(criminals: number) {
        this.criminals += criminals;
        this.power += criminals;
    }

    toString(): string {
        return super.toString() + ", Criminals: " + this.criminals + ", IsAttacking: " + this.isAttacking + ", Attack: " + this.attack;
    }

    Print(){
        console.log(this.toString());
        
    }
}