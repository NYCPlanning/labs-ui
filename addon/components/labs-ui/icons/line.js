import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../../templates/components/labs-ui/icons/line';

export default Component.extend({
  init() {
    this._super(...arguments);

    this.set('options', {});
  },

  classNames: ['legend-icon-layer', 'line'],
  tagName: 'svg',
  layout,

  svgOptions: computed('options', function() {
    const defaultOptions = {
      stroke: 'SteelBlue'
    };
    const options = this.get('options');

    return Object.assign(defaultOptions, options);
  }),

  height: 10,
  width: 17,
  viewBox: '0 0 17 10',
  preserveAspectRatio: 'xMinYMid',

  didInsertElement() {
    const svgPath = this.element.querySelector('path');
    const svgOptions = this.get('svgOptions');
    Object.entries(svgOptions).forEach(([attr, value]) => {
      svgPath.setAttribute(attr, value);
    });
  }
});
