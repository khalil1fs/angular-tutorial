import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      Today's item: {{item}}
    </p>
  `,
})
export class ChildComponent  {
  @Input() item = '';
  constructor() { }

}
