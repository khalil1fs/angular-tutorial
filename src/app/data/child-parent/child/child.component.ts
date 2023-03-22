import {Component, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-child-r',
  template: `
    <label for="item-input">Add an item:</label>
    <input type="text" id="item-input" #newItem>
    <button type="button" (click)="addNewItem(newItem.value)">Add to parent's list</button>
  `
})
export class ChildComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    if (value) {
      this.newItemEvent.emit(value);
    }
  }
  constructor() { }


}
