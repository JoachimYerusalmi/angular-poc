import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Link2RoutingModule } from './link2-routing.module';
import {Link2Component} from './link2.component';

@NgModule({
  declarations: [Link2Component],
  imports: [
    CommonModule,
    Link2RoutingModule
  ]
})
export class Link2Module { }
