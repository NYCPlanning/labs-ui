import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class LayerGroupToggleComponent extends Component {
  @tracked isActive = false;

  get active() {
    return this.args.active;
  }

  get tooltipIcon() {
    return this.args.tooltipIcon || 'info-circle';
  }

  get activeTooltipIcon() {
    return this.args.activeTooltipIcon || 'exclamation-triangle';
  }

  @action
  toggle() {
    this.isActive = !this.isActive;
  }

  @action
  activate() {
    this.isActive = this.active;
  }
}
