import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import { OpbrengstComponent } from './opbrengst/opbrengst.component';

@NgModule({
  declarations: [
    AppComponent,
    OpbrengstComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
