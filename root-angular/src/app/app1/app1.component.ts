import { Component, OnInit } from '@angular/core';
import { mountRootParcel} from "single-spa";

const windowAny: any = window;
@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.scss']
})
export class App1Component implements OnInit {
  mountParcel = mountRootParcel;
  spaApp1;
  constructor() { }

  ngOnInit(): void {
    // this.spaApp1 = windowAny.System.import("app1");
    windowAny.System.import("app1").then(mod => {
      this.spaApp1 = mod.default;
    });
  }

}
