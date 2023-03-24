import {Component, VERSION, ApplicationRef} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
})
export class InfoComponent  {
  major = VERSION.major;
  full = VERSION.full;
  minor = VERSION.minor;
  patch = VERSION.patch;

  constructor(private title: Title) {
    title.setTitle('Info');
  }

}
