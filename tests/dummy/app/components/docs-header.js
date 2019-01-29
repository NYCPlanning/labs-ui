import Component from '@ember/component';
import layout from '../templates/components/docs-header';
import config from '../config/environment';

const { version } = config;

export default Component.extend({
  layout,
  version,
});
