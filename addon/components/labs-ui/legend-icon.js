import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { computed } from '@ember-decorators/object';
import { type } from '@ember-decorators/argument/type';
import { classNames } from '@ember-decorators/component';
import layout from '../../templates/components/labs-ui/legend-icon';

@classNames('legend-icon')
export default class LegendIconComponent extends Component {
  layout = layout;

  @computed
  get iconType() {
    const type = this.get('icon.type');
    return (type === 'fa-icon') ? 'fa-layers' : type;
  }

  @argument
  @type('object')
  icon = {};
}
