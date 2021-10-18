import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import { OpbrengstComponent } from './opbrengst/opbrengst.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule, DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    OpbrengstComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
