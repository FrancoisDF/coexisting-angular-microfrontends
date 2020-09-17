import { Component, OnInit } from '@angular/core';
import { mountRootParcel} from "single-spa";

const windowAny: any = window;

@Component({
  selector: 'app3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mountParcel = mountRootParcel;
  spaApp1;
  spaApp2;
  constructor() { }

  ngOnInit(): void {
    windowAny.System.import("app4").then(mod => {
      this.spaApp1 = mod.default;
    });
    windowAny.System.import("app2").then(mod => {
      this.spaApp2 = mod.default;
    });

  }

}
