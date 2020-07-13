import { Component, OnInit } from '@angular/core';
import { mountRootParcel} from "single-spa";

const windowAny: any = window;


@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.scss']
})
export class App2Component implements OnInit {

  mountParcel = mountRootParcel;
  spaApp2;
  constructor() { }

  ngOnInit(): void {
    this.spaApp2 = windowAny.System.import("app2");

  }

}
