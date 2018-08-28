import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { computed } from '@ember-decorators/object';
import { tagName, classNames, attribute } from '@ember-decorators/component';
import layout from '../../../templates/components/labs-ui/icons/line';

@tagName('svg')
@classNames('legend-icon-layer', 'line')
export default class LabsLegendIconLineComponent extends Component {
  layout = layout;

  @computed('options')
  get svgOptions() {
    const defaultOptions = {
      stroke: 'SteelBlue',
      fill: 'none',
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
