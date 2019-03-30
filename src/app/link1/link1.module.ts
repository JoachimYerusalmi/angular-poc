import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Link1RoutingModule } from './link1-routing.module';
import {Link1Component} from './link1.component';

@NgModule({
  declarations: [Link1Component],
  imports: [
    CommonModule,
    Link1RoutingModule,
  ]
})
export class Link1Module { }
