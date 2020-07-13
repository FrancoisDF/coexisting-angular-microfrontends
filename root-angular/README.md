# RootAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.11.


## Single-spa context

This app has been created to reproduce the `root-html-file` app but using the Angular as root application with `Parcel` feature instead of the `single-spa-layout` functionality.

When Loading micro-app with parcel, the master app (here Angular) will need to mount/unmount micro apps instead of being handled by the singleSpa `application` that use routing to load/unload apps. 

Micro-app loading solution: 
- Navbar loaded as application (to insure that single-spa works...)
- App1 loaded as Parcel in `/app1`
- App2 loaded as Parcel in `/app2`

### Dev

To get this app working, you can either:
- add the [CORS plugin](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en) on chrome
- Run each app1, app2 and navbar apps locally, then update the import-map:
    ```
    {
      "imports": {
        "app1": "http://localhost:4201/main.js",
        "app2": "http://localhost:4202/main.js",
        "navbar": "http://localhost:4300/main.js"
      }
    }
    ```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
