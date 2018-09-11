import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { action, computed } from '@ember-decorators/object';
import { type } from '@ember-decorators/argument/type';
import { required } from '@ember-decorators/argument/validation';
import { next } from '@ember/runloop';
import { A } from '@ember/array';
import layout from '../../templates/components/labs-ui/accordion-menu';

export default class AccordionMenuComponent extends Component {
  constructor(...args) {
    super(...args);

    this.set('layerGroupToggleItems', A([]));
  }

  layout = layout;

  classNames=['accordion-menu'];

  @computed('layerGroupToggleItems.@each.active')
  get numberMenuItems() {
    const items = this.get('layerGroupToggleItems');

    const activeStates = items.mapBy('active');

    return activeStates.reduce((acc, curr) => {
      let mutatedAcc = acc;
      if (curr) {
        mutatedAcc += 1;
      }

      return mutatedAcc;
    }, 0);
  }

  @argument
  open = true;

  @argument
  mapIsLoading = false;

  @argument
  @required
  @type('string')
  title;

  @action
  toggleAccordion() {
    this.toggleProperty('open');
  }

  @action
  registerChild(componentContext) {
    next(() => {
      this.get('layerGroupToggleItems').pushObject(componentContext);
    });
  }

  @action
  unregisterChild(componentContext) {
    next(() => {
      this.get('layerGroupToggleItems').removeObject(componentContext);
    });
  }
}
