import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import {Feature1Component} from './feature1.component';
import { Feature1NavigationComponent } from './feature1-navigation/feature1-navigation.component';

@NgModule({
  declarations: [Feature1Component, Feature1NavigationComponent],
  imports: [
    CommonModule,
    Feature1RoutingModule,
  ]
})
export class Feature1Module { }
