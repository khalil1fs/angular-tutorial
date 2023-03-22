import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
})
export class InfoComponent  {

  constructor(private title: Title) {
    title.setTitle('Info');
  }

}
