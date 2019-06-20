import { Injectable } from '@angular/core';


@Injectable()
export class InventoryService {

    readonly inventorySaveKey: string = 'inventory-save'

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
}