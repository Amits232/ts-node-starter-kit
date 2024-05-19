import { log } from "console";


export default class Person {
    protected name: string;
    public power: number;
    constructor(name: string, power: number) {
        this.name = name;
        this.power = power;
    }

    toString() {
        return "Name: " + this.name + ", Power: " + this.power;
    }
    print(){
        console.log(this.toString());
        
    }

    get Name() {
        return this.name;
    }

    get Power() {
        return this.power;
    }
    set Power(power: number) {
        this.power = power;
    }
    set Name(name: string) {
        this.name = name;
    }
}