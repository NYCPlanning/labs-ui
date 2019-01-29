import Component from '@ember/component';
import { computed } from '@ember/object';
import { next } from '@ember/runloop';
import { A } from '@ember/array';
import layout from '../../templates/components/labs-ui/layer-groups-container';

export default Component.extend({
  init(...args) {
    this._super(...args);

    this.set('layerGroupToggleItems', A([]));
  },

  layout,

  classNames: ['layer-groups-container'],

  numberMenuItems: computed('layerGroupToggleItems.@each.active', function() {
    const items = this.get('layerGroupToggleItems');

    const activeStates = items.mapBy('active');

    return activeStates.reduce((acc, curr) => {
      let mutatedAcc = acc;
      if (curr) {
        mutatedAcc += 1;
      }

      return mutatedAcc;
    }, 0);
  }),

  open: true,

  mapIsLoading: false,

  title: null,

  actions: {
    toggleLayerGroupsContainer() {
      this.toggleProperty('open');
    },
    registerChild(componentContext) {
      next(() => {
        this.get('layerGroupToggleItems').pushObject(componentContext);
      });
    },
    unregisterChild(componentContext) {
      next(() => {
        this.get('layerGroupToggleItems').removeObject(componentContext);
      });
    },
  },
});

