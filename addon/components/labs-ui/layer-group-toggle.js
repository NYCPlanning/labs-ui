import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LayerGroupToggleComponent extends Component {
  @tracked active =  true;

  get tooltipIcon() {
    return this.args.tooltipIcon || 'info-circle';
  }

  get activeTooltipIcon() {
    return this.args.activeTooltipIcon || 'exclamation-triangle';
  }

  @action
  toggle() {
    this.active = !this.active;
  }
}
