import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import { Link1Component } from './components/link1/link1.component';
import { Link2Component } from './components/link2/link2.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Link1Component,
    Link2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
