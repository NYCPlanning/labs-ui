# Labs UI

[Short description of the addon.]

### Installing the addon

1. Install the addon:
  ```
  ember install labs-ui
  ```

1. Install Ember CLI Foundation 6 SASS: 
  ```
  ember install ember-cli-foundation-6-sass
  ```

1. Run the Foundation generator: 
  ```
  ember g ember-cli-foundation-6-sass
  ```
  If `app.scss` doesn't exist, let the generator add it.

1. Edit `app.scss` to `@import`/`@include` files in this order:

  - **Labs UI variables** — sets vars for colors (e.g. DCP’s orange, Land Use colors, planning standard colors), imports Foundation utilities, sets Foundation vars

  - **Foundation** — imports 'foundation-sites/foundation', includes foundation-everything;

  - **Labs UI Modules** —

  - **Custom App Modules** — 

  The consuming app's `app.scss` should look something like this:

  ```
  // Labs UI variables
  @import 'labs-ui/variables';

  // Foundation
  @import 'foundation-sites/foundation';
  @include foundation-everything;

  // Labs UI Modules
  @import 'labs-ui/modules';

  // Custom App Modules
  @import 'layouts/_l-default';
  @import 'base/_typography';
  ```

1. Add the Foundation options to ember–cli-build.js: 
```
'ember-cli-foundation-6-sass': { 
  'foundationJs': 'all' 
},
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
