import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    handleMapLoad(map) {
      window.map = map;
    }
  },
});
