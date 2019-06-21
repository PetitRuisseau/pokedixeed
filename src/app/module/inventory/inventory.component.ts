import { Component } from '@angular/core';
import { InventoryService, PokemonService } from 'src/app/core/services';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'inventory-component',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  objectKeys = Object.keys;
  public inventoryList: number[];
  public team = {
      slot1: [],
      slot2: [],
      slot3: [],
      slot4: [],
      slot5: [],
      slot6: [],
    };
  constructor(
    private inventoryService: InventoryService,
    private pokemonService: PokemonService,
  ) {
    this.inventoryList = this.getInventoryList()
  }

  private getInventoryList(): number[] {
    return this.inventoryService.getInventoryList()
  }

  public getPokemonSpriteUrl(id: number): string {
    return this.pokemonService.getPokemonSpriteUrl(id)
  }

  public drop(event: CdkDragDrop<string[]>) {
    console.log(event, this.team, this.inventoryList);
    
    if (event.previousContainer != event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        1);
      if (event.container.data.length == 2) {
        transferArrayItem(
          event.container.data,
          event.previousContainer.data,
          0,
          event.previousIndex);
      }
    }
  }
}
