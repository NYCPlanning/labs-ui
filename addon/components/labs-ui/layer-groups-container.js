import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class LayerGroupsContainerComponent extends Component {
  elementId = guidFor(this);
  mapIsLoading = false;

  @tracked isOpen = false;
  @tracked numberMenuItems;

  get title() {
    return this.args.title || '';
  }

  get open() {
    return this.args.open;
  }

  @action
  setDefaultIsOpen() {
    this.isOpen = this.open;
  }

  @action
  setNumberMenuItems() {
    const groups = document.getElementById(this.elementId).getElementsByClassName('active');
    this.numberMenuItems = groups.length;
  }

  @action
  toggleLayerGroupsContainer() {
    this.isOpen = !this.isOpen;
    this.setNumberMenuItems();
  }
}
