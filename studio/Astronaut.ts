import { Payload } from './Payload';

export class Astronaut implements Payload{

    mass: number
    name: string
constructor(mass: number, name: string){
    this.mass =  mass
    this.name = name
    }
}