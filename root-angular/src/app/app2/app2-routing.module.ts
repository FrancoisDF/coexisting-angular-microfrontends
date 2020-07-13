import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { App2Component } from './app2.component';
// lazy loading
const routes: Routes = [{ path: '', component: App2Component}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class App2RoutingModule { }
