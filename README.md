# Labs UI

## NYC Planning Labs Ember.js Components

Labs UI is an Ember.js addon containing common components and design patterns used across [NYC Planning Labs](https://planninglabs.nyc/) digital products, incorporating styles from our [Digital Style Guide](https://nyc-planning-style-guide.netlify.com/).

### Compatibility

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above

---

### Component documentation

https://ui.planninglabs.nyc/

---

### Installation


##### A) Requirements:

Install the NYC Digital Style Guide.
```
yarn add nyc-planning-style-guide
```

Install the Sass compiler and make sure you have an `app.scss` file.
```
ember install ember-cli-sass
```

Install Ember Truth Helpers.
```
ember install ember-truth-helpers
```


##### B) Install Labs UI:

```
yarn add labs-ui
```


##### C) Configure Sass load paths:

Add `sassOptions` to `ember-cli-build.js` to define which directories Sass should look in when trying to import files.
```
let app = new EmberApp(defaults, {
  'sassOptions': {
    'includePaths': [
      'node_modules/',
      'node_modules/foundation-sites/scss',
      'node_modules/nyc-planning-style-guide/dist/assets/scss',
    ]
  },
});
```


##### C) Edit `app.scss`:

Import the required files and include mixins in the right order so consuming app's `app.scss` looks something like this:
```
// Foundation utilities
@import 'foundation-sites/scss/util/util';

// Labs UI variables
@import 'nyc-planning-variables';

// Foundation mixins
@import 'foundation-sites/scss/foundation';

// Foundation components
@include foundation-everything; // or a subset

// Style Guide components
@import 'modules/nyc-planning-all-modules'; // or a subset

// Labs UI components
@import 'labs-ui/all-modules'; // or a subset

// Custom app modules and styles
@import 'layouts/_my-custom-app-module';
.peanut-butter {
  color: $orange-muted;
}
```


##### D) Add Font Awesome and its icon sets:

```
ember install @fortawesome/ember-fontawesome
yarn add --dev @fortawesome/free-solid-svg-icons
yarn add --dev @fortawesome/free-regular-svg-icons
yarn add --dev @fortawesome/free-brands-svg-icons
```


##### E) Add Font Awesome icons to your ENV:
```
fontawesome: {
  icons: {
    'free-brands-svg-icons': 'all',
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

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `yarn test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200)

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

### Deploying the docs (dummy application)

* The `master` branch is automatically deployed via Netlify. See the docs at [ui.planninglabs.nyc](https://ui.planninglabs.nyc/).
