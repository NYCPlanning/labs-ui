# Labs UI
## NYC Planning Labs Ember Components
This addon contains common Ember components and Sass variables and utility classes used across multiple Planning Labs applications.

---

### Documentation (using the addon)

http://nycplanning.github.io/labs-ui

---

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

  - If `app.scss` doesn't exist, let the generator add it.

  - Ignore or delete the generated `_settings.scss` file.

4. Edit `app.scss` and `@import`/`@include` files in this order:

  1. **Labs UI variables** — sets vars for colors (e.g. DCP’s orange, Land Use colors, planning standard colors), imports Foundation utilities, sets Foundation vars

  2. **Foundation** — import `foundation-sites/foundation` and include `foundation-everything`;

  3. **Labs UI modules** — import all modules (`@import 'labs-ui/all-modules'`) or a subset of modules (`@import 'labs-ui/modules/_m-tooltipster'`)

  4. **Custom styles** — application-specific styles and overrides

  The consuming app's `app.scss` should look something like this:

  ```
  // Labs UI variables
  @import 'labs-ui/variables';

  // Foundation
  @import 'foundation-sites/foundation';
  @include foundation-everything;

  // Labs UI modules (import all or some)
  @import 'labs-ui/all-modules';

  // Custom app modules and styles
  @import 'layouts/_l-default';

  .peanut-butter {
    color: $orange-muted;
  }
  ```

5. Add the Foundation options to ember–cli-build.js: 
  ```
  'ember-cli-foundation-6-sass': { 
    'foundationJs': 'all' 
  },
  ```

6. Add Font Awesome and its icon sets
  - `ember install @fortawesome/ember-fontawesome`
  - `yarn add --dev @fortawesome/free-solid-svg-icons`
  - `yarn add --dev @fortawesome/free-regular-svg-icons`

7. Add Font Awesome icons to your ENV
  ```
  fontawesome: {
      icons: {
        'free-regular-svg-icons': 'all',
        'free-solid-svg-icons': 'all',
      },
    },
  ```

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

### Deploying the dummy application (docs) to GitHub Pages

* Use `ember-cli-github-pages` to build the docs and deploy them to gh-pages:  https://github.com/poetic/ember-cli-github-pages#usage
