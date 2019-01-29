import Component from '@ember/component';
import layout from '../../templates/components/labs-ui/site-header';

export default Component.extend({
  tagName: 'header',
  classNames: ['site-header'],

  layout,

  ariaRole: 'banner',

  closed: true,

  responsiveNav: false,

  responsiveSize: 'large',
});
