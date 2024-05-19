import Person from "./Person";


export default class SuperHero extends Person {
    attacks: string[]
    attacksValue: number[]
    saveTheWorld: boolean = false
    isAttacked: boolean = false
    constructor(name: string, power: number, attacks: string[], attacksValue: number[]) {
        super(name, power);
        this.attacks = attacks;
        this.attacksValue = attacksValue;
    }

    get IsAttacked() {
        return this.isAttacked;
    }
    get SaveTheWorld() {
        return this.saveTheWorld;
    }

    get Attacks() {
        return this.attacks;
    }
    get AttacksValue() {
        return this.attacksValue;
    }
    set IsAttacked(isAttacked: boolean) {
        this.isAttacked = isAttacked;
    }
    GetAttack(choice: number){
        return this.attacks[choice];
    }
    GetDamage(choice: number){
        return this.attacksValue[choice];
    }

    Attack() {
        this.isAttacked = true;
    }

    //משתנה "iAttacked"
    //נועד כדי לבדוק אם הגיבור מותקף, משתנה זה ישתנה כאשר הנבל מתקיף.
    Rest(){
        if(!this.isAttacked){
            this.Power += 1;
        }
        else
            console.log("Cant rest right now!");
            
    }

    toString(): string {
        return super.toString() + ", Attacks: " + this.attacks
    }

    Print(){
        console.log(this.toString());
    }
}

