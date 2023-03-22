import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ImgLazyComponent } from './img-lazy/img-lazy.component';
import { ParentComponent } from './data/parent-child/parent/parent.component';
import { ChildComponent } from './data/parent-child/child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ParentComponent as ParentComponentReverse} from './data/child-parent/parent/parent.component';
import { ChildComponent as ChildComponentReverse} from './data/child-parent/child/child.component';
import {FormsModule} from "@angular/forms";
import { PopupComponent } from './popup/popup.component';
import {PopupService} from "./popup/popup.service";
import { ShowPopupComponent } from './popup/show-popup.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ImgLazyComponent,
    ParentComponent,
    ChildComponent,
    ParentComponentReverse,
    ChildComponentReverse,
    PopupComponent,
    ShowPopupComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [PopupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
