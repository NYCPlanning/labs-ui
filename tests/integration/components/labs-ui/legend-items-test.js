import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | labs-ui/legend-items', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('items', [
      {
        "label":"Foo Bar",
        "tooltip": "This is the legend item tooltip.",
        "icon": {
          "type": "line",
          "layers": [
            {
              "stroke":"rgba(150, 50, 50, 1)"
            }
          ]
        }
      }
    ]);

    await render(hbs`{{labs-ui/legend-items items=items}}`);

    assert.equal(this.element.textContent.trim(), "Foo Bar");
  });
});
