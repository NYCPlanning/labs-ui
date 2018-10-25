import Controller from '@ember/controller';
import config from '../config/environment';

const { version } = config;

export default Controller.extend({
  version,
  actions: {
    handleMapLoad(map) {
      window.map = map;
    }
  }
});
