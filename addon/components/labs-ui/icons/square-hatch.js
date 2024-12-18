import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SquareHatchComponent extends Component {
  height = 10;
  width = 10;
  viewBox = '0 0 10 10';
  preserveAspectRatio = 'xMinYMid';

  get options() {
    return this.args.options || {
      'stroke': 'SteelBlue',
      'fill': 'rgba(70, 130, 180, 0.5)',
      'stroke-linejoin': 'round',
    };
  }

  @action
  addAttributes(pathElement) {
    Object.entries(this.options).forEach(([attr, value]) => {
      pathElement.setAttribute(attr, value);
    });
  }
}
