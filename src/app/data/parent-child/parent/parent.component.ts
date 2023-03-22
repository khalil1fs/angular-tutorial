import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

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
  constructor(private title: Title) {
    title.setTitle('data Parent -> Child');
  }

}
