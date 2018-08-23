# Labs UI

[Short description of the addon.]

### Installing the addon

1. Install the addon:
```
ember install labs-ui
```

2. Install Ember CLI Foundation 6 SASS: 
```
ember install ember-cli-foundation-6-sass
``` 

3. Run the Foundation generator: 
```
ember g ember-cli-foundation-6-sass
```
 Either let the generator add the app.scss file, or import/include Foundation your existing one 

4. Add the Foundation options to ember–cli-build.js: 
`` `
 'ember-cli-foundation-6-sass': { 
  'foundationJs': 'all' 
}, 
``` 

5. Import Labs UI Sass settings at the top of app.scss:
`` `
@import 'labs-ui/variables';
```
 This file includes Labs-specific colors like DCP’s orange (`$dcp-orange`) and Land Use colors (`$lu-[color] `) 

6. Import Labs UI Sass modules after Foundation in app.scss: 
`` `
@import 'labs-ui/modules’;
```

### Using the addon

[Longer description of how to use the addon in apps.]

---

# Contributing

### Installation

* `git clone <repository-url>`
* `cd labs-ui`
* `yarn`

### Linting

* `yarn run lint:js`
* `yarn run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `yarn test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200)

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
