import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { computed } from '@ember-decorators/object';
import { tagName, classNames, attribute } from '@ember-decorators/component';
import layout from '../../../templates/components/labs-ui/icons/rectangle';

@tagName('svg')
@classNames('legend-icon-layer', 'rectangle')
export default class LabsLegendIconRectangleComponent extends Component {
  layout = layout;

  @computed('options')
  get svgOptions() {
    const defaultOptions = {
      stroke: 'SteelBlue',
      fill: 'rgba(70, 130, 180, 0.5)',
      'stroke-linejoin': 'round',
    };
    const options = this.get('options');

    return Object.assign(defaultOptions, options);
  }

  @argument options = {};

  @attribute height = 10;
  @attribute width = 17;
  @attribute viewBox = '0 0 17 10';
  @attribute preserveAspectRatio = 'xMinYMid';

  didInsertElement() {
    const svgPath = this.element.querySelector('path');
    const svgOptions = this.get('svgOptions');
    Object.entries(svgOptions).forEach(([attr, value]) => {
      svgPath.setAttribute(attr, value);
    });
  }
}
