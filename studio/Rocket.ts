import { Payload } from './Payload';

export class Rocket implements Payload{
    name: string
    totalCapacityKg: number
    cargoItems: array[]
    astronauts: array[] 
    
    consructor(name:string, totalCapacityKg:number){
        this.name = name
        this.totalCapacityKg = totalCapacityKg
    }
}