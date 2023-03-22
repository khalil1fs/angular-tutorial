import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import {PopupService} from "./popup.service";
import {PopupComponent} from "./popup.component";

@Component({
  selector: 'app-show-popup',
  template: `
    <input #input value="Message">
    <button type="button" (click)="popup.showAsComponent(input.value)">Show as component</button>
    <button type="button" (click)="popup.showAsElement(input.value)">Show as element</button>
  `,
})
export class ShowPopupComponent {
  constructor(injector: Injector, public popup: PopupService) {
    const PopupElement = createCustomElement(PopupComponent, {injector});
    customElements.define('popup-element', PopupElement);
  }

}
