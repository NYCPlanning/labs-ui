import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { computed } from '@ember-decorators/object';
import { type } from '@ember-decorators/argument/type';
import { classNames } from '@ember-decorators/component';
import layout from '../../templates/components/labs-ui/legend-icon';

@classNames('legend-icon')
export default class LegendIconComponent extends Component {
  layout = layout;

  @computed('icon')
  get legendColorStyle() {
    const color = this.get('icon.options.color');
    return `color: ${color};`;
  }

  @computed('icon')
  get legendBackgroundColorStyle() {
    const color = this.get('icon.options.color');
    return `background-color: ${color};`;
  }

  @computed('icon')
  get legendBorderColorStyle() {
    const color = this.get('icon.options.color');
    return `border-color: ${color};`;
  }

  @computed('icon')
  get legendIconType() {
    const color = this.get('icon.type');
    return `border-color: ${color};`;
  }

  @argument
  @type('object')
  icon = {};
}
