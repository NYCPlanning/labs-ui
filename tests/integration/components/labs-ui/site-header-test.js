import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | labs-ui/site-header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    // Template block usage:
    await render(hbs`
      {{#labs-ui/site-header
        responsiveNav=true
        responsiveSize='medium'
        as |banner|
      }}
        {{#banner.title}}
          <a class='site-title'>App Name <small class="site-subtitle show-for-medium">Subtitle</small></a>
        {{/banner.title}}
        {{#banner.nav}}
          <ul class="menu vertical medium-horizontal">
            <li><a>Menu Item</a></li>
          </ul>
        {{/banner.nav}}
      {{/labs-ui/site-header}}
    `);

    // The beta notice renders
    const betaNotice = find('.labs-beta-notice').textContent.trim();
    assert.equal(betaNotice, 'A beta project of NYC Planning Labs');

    // The beta notice renders
    const dcpLinkIcon = await find('a.dcp-link img');
    assert.equal(!!dcpLinkIcon, true);

    // The {{site-header-title}} contextual component renders
    const siteTitle = find('.site-title').textContent.trim();
    assert.equal(siteTitle, 'App Name Subtitle');

    // The {{site-header-nav}} contextual component renders
    const siteNav = find('.menu').textContent.trim();
    assert.equal(siteNav, 'Menu Item');
  });
});
