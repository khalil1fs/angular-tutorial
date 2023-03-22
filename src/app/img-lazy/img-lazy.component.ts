import { Component, OnInit } from '@angular/core';
import {asapScheduler, filter, from, fromEvent, map, Observable, of, scan, take} from "rxjs";

@Component({
  selector: 'app-img-lazy',
  templateUrl: './img-lazy.component.html',
})
export class ImgLazyComponent implements OnInit {

  x = of('hello', asapScheduler); // with asapScheduler it become async
  word = from('khalil')
  event = fromEvent(document, 'click')
  cold = Observable.create((o: { next: (arg0: number) => any; }) => o.next(Math.random()))

  source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  result = this.source.pipe(
    map(e => Math.pow(e, 2)),
    scan((acc, val) => acc + val),
    filter(v => v > 10),
    take(3));
  constructor() { }

  ngOnInit(): void {
    this.result.subscribe(e=>console.log(e));
    // this.cold.subscribe((e: any)=>console.log(e))
    // this.cold.subscribe((e: any)=>console.log(e))
    // this.x.subscribe(e=>console.log(e))
    // console.log('world')
    // this.word.subscribe(e=>console.log(e))
    // this.event.subscribe(e=>console.log(e))

  }

}
