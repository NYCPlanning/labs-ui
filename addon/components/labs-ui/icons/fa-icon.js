import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { tagName, classNames } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { htmlSafe } from '@ember/template';
import layout from '../../../templates/components/labs-ui/icons/fa-icon';

@tagName('span')
@classNames('legend-icon-layer')
export default class LabsLegendIconLineComponent extends Component {
  layout = layout;

  @argument options = {};

  @computed('options.color')
  get spanStyle() {
    return htmlSafe(this.options.color ? `color: ${this.options.color}` : '');
  }
}
