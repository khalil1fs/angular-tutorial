import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template:
    `
      <input type="text" [(ngModel)]="currentItem">
      <app-child [item]="currentItem"></app-child>
    `
})
export class ParentComponent {
  currentItem = 'Television';
  constructor() { }


}
