import { Injectable } from '@angular/core';


@Injectable()
export class InventoryService {

    readonly inventorySaveKey: string = 'inventory-save'
    readonly teamSaveKey: string = 'team-save'

    constructor() {}

    public savePokemon(id: number) {
        let list = []
        if (window.localStorage.getItem(this.inventorySaveKey)) {
            list = JSON.parse(window.localStorage.getItem(this.inventorySaveKey))
        }
        list.push(id)
        window.localStorage.setItem(this.inventorySaveKey, JSON.stringify(list))
    }

    public getInventoryList(): number[] {
        return JSON.parse(window.localStorage.getItem(this.inventorySaveKey)) || []
    }
    
    public getTeam() {
        return JSON.parse(window.localStorage.getItem(this.teamSaveKey)) 
        || {slot1:[],slot2:[],slot3:[],slot4:[],slot5:[],slot6:[]}
    }
    
    public saveInventoryList(inventory: number[]) {
        window.localStorage.setItem(this.inventorySaveKey, JSON.stringify(inventory))
    }
    
    public saveTeam(team) {
        window.localStorage.setItem(this.teamSaveKey, JSON.stringify(team))
    }
}