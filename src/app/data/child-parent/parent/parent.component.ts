import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-parent-r',
  template: `
    <app-child-r (newItemEvent)="addItem($event)"></app-child-r>
    <ul>
      <li *ngFor="let item of items">{{item}}</li>
    </ul>
  `
})
export class ParentComponent {
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  constructor(private title: Title) {
    title.setTitle('data Child -> Parent');
  }

}
