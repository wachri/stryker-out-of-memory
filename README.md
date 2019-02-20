# Stryker out of memory testing
Repository to reproduce a problem when [stryker-mutator](https://github.com/stryker-mutator) runs out of memory in 
a combination of Angular, Jest and stryker.
 
Tracked in the ticket [stryker-mutator/stryker/issues/1230](https://github.com/stryker-mutator/stryker/issues/1230).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.2.

The master contains a working combination of Angular, Jest and Stryker.



## Run stryker
```bash
yarn stryker
```

## Generate more test components
If You need test components you can use the [src/app/generate-component.js](https://github.com/wachri/stryker-out-of-memory/blob/master/src/app/generate-componets.js)
script to create a new set test components. But it looks like that it not depends only on the total amount of components.
