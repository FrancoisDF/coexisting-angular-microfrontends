import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { App1Component } from './app1.component';
// lazy loading
const routes: Routes = [{ path: '', component: App1Component}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class App1RoutingModule { }
