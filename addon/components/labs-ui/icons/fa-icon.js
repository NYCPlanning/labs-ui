import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { tagName, classNames } from '@ember-decorators/component';
import layout from '../../../templates/components/labs-ui/icons/fa-icon';

@tagName('span')
@classNames('legend-icon-layer')
export default class LabsLegendIconLineComponent extends Component {
  layout = layout;

  @argument options = {};
}
