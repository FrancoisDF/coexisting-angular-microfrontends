import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParcelModule } from 'single-spa-angular';
import { App2Component } from './app2.component';
import { App2RoutingModule } from './app2-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ParcelModule,
    App2RoutingModule,
  ],
  declarations: [App2Component],
})
export class App2Module { }
