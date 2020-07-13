import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App1Component } from './app1.component';
import { ParcelModule } from 'single-spa-angular';

import { App1RoutingModule } from './app1-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ParcelModule,
    App1RoutingModule
  ],
  declarations: [App1Component],
})
export class App1Module { }
