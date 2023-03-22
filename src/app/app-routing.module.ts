import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from "./form/form.component";
import {ImgLazyComponent} from "./img-lazy/img-lazy.component";
import {ParentComponent} from "./data/parent-child/parent/parent.component";
import { ParentComponent as ParentComponentReverse} from './data/child-parent/parent/parent.component';
import {ShowPopupComponent} from "./popup/show-popup.component";
import {InfoComponent} from "./info/info.component";


const routes: Routes = [
  {path: 'counter', component: FormComponent},
  {path: 'lazy', component: ImgLazyComponent},
  {path: 'pop-up', component: ShowPopupComponent},
  {path: 'info', component: InfoComponent},
  {
    path: 'data', children: [
      {path: 'parent-child', component: ParentComponent},
      {path: 'child-parent', component: ParentComponentReverse},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
