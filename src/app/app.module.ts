import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {TaskComponent} from './app.component';
import { Highlight } from './highlight.directive';
import { FirstcompoComponent } from './firstcompo/firstcompo.component';
import { CaptalizeFirstPipe } from './capitalize-first.pipe';



@NgModule({
  declarations: [
    TaskComponent,
     Highlight,
     FirstcompoComponent,
     CaptalizeFirstPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [TaskComponent]
})
export class AppModule { }
