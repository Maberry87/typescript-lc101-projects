import { Payload } from './Payload';

export class Cargo implements Payload{
    mass: number
    material: string

constructor(mass:number, material: string) {
    this.mass = mass 
    this.material = material 
    }
}
