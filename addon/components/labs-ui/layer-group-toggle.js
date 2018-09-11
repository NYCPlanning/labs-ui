import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { action } from '@ember-decorators/object';
import { type } from '@ember-decorators/argument/type';
import { required } from '@ember-decorators/argument/validation';
import { classNames } from '@ember-decorators/component';
import layout from '../../templates/components/labs-ui/layer-group-toggle';

@classNames('layer-group-toggle')
export default class LabsUILayerMenuItemComponent extends Component {
  constructor(...args) {
    super(...args);
    this.get('didInit')(this);
  }

  layout = layout;

  @required
  @argument
  @type('string')
  label;

  @argument
  icon = [];

  @argument
  tooltip = '';

  @argument
  tooltipIcon = 'info-circle';

  @argument
  @type('boolean')
  active = true;

  @argument
  activeTooltip = '';

  @argument
  activeTooltipIcon = 'exclamation-triangle';

  @argument
  didInit = () => {}

  @argument
  willDestroyHook = () => {}

  willDestroy() {
    this.get('willDestroyHook')(this);
  }

  @action
  toggle() {
    this.toggleProperty('active');
  }
}
