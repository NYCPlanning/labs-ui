import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { type } from '@ember-decorators/argument/type';
import { required } from '@ember-decorators/argument/validation';
import { classNames } from '@ember-decorators/component';
import layout from '../../templates/components/labs-ui/legend-items';

@classNames('legend-items')
export default class LabsUILegendItemsComponent extends Component {
  @required
  @argument
  @type('object')
  items;

  layout = layout;
}
