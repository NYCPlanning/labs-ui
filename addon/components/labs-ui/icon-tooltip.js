import Component from '@ember/component';
import layout from '../../templates/components/labs-ui/icon-tooltip';

export default Component.extend({
  tagName: 'span',
  classNames: 'icon-tooltip',

  layout,
  tip: '',
  side: 'top',
  icon: 'info-circle',
  transform: '',
  fixedWidth: false,
});
