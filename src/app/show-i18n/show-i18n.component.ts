import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-show-i18n',
  templateUrl: './show-i18n.component.html',
})
export class ShowI18nComponent {
  title = 'english';

  constructor(private titleService: Title) {
    this.titleService.setTitle($localize`${this.title}`);
  }


}
