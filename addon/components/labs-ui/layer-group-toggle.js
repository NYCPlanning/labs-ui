import Component from '@ember/component';
import layout from '../../templates/components/labs-ui/layer-group-toggle';

export default Component.extend({
  init(...args) {
    this._super(...args);

    this.get('didInit')(this);

    this.set('icon', []);
  },

  classNames: ['layer-group-toggle'],

  layout,

  label: null,

  tooltip: '',

  infoLink: '',

  infoLinkIcon: 'link',

  tooltipIcon: 'info-circle',

  active: true,

  activeTooltip: '',

  activeTooltipIcon: 'exclamation-triangle',

  didInit() {},

  willDestroyHook() {},

  willDestroy() {
    this.get('willDestroyHook')(this);
  },

  actions: {
    toggle() {
      this.toggleProperty('active');
    },
  },
});
