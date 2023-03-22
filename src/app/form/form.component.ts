import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  interpolation: ["((", "))"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit, OnDestroy {
  x = 0;
  private intervalSubscription: Subscription | undefined;


  constructor(private change: ChangeDetectorRef, private title: Title, private meta: Meta) {
    this.x = Number(localStorage.getItem('x'));
  }

  ngOnInit(): void {
    this.intervalSubscription = interval(1000).subscribe(() => this.changeX());
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }



  changeX() {
    this.x++;
    this.save();
    this.change.detectChanges();
    this.title.setTitle(this.x.toString())
  }

  private save() {
    localStorage.setItem('x', this.x.toString());
  }

  changeMeta() {
    this.meta.updateTag({name: "title", content: ""})
    this.meta.updateTag({name: "description", content: "Lorem ipsum dolor"})
    this.meta.updateTag({name: "image", content: "./assets/blog-image.jpg"})
    this.meta.updateTag({name: "site", content: "My Site"})
  }
}
