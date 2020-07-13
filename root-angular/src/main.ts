import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { start, registerApplication} from "single-spa";
const windowAny: any = window;


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


registerApplication(
  'navbar',
  () => windowAny.System.import('navbar'),
  (location) => location.pathname.startsWith('/')
);
// Do we need to start single spa even if we only use Parcel?
start();
