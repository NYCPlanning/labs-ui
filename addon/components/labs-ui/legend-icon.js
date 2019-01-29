import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../../templates/components/labs-ui/legend-icon';

export default Component.extend({
  init(...args) {
    this._super(...args);
  },

  icon: null,

  classNames: ['legend-icon'],
  layout,

  iconType: computed(function() {
    const type = this.get('icon.type');
    return (type === 'fa-icon') ? 'fa-layers' : type;
  }),
});
