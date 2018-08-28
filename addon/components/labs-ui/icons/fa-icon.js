import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { computed } from '@ember-decorators/object';
import { tagName, classNames, attribute } from '@ember-decorators/component';
import layout from '../../../templates/components/labs-ui/icons/fa-icon';

@tagName('span')
@classNames('legend-icon-layer')
export default class LabsLegendIconLineComponent extends Component {
  layout = layout;

  // @computed('options')
  // get styleString() {
  //   const defaultOptions = {
  //     color: 'inherit',
  //   };
  //
  //   const options = this.get('options');
  //
  //   const merged = Object.assign(defaultOptions, options);
  //
  //   return `color: ${merged.color}`
  // }

  @argument options = {};

}
