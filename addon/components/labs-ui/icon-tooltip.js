import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { tagName } from '@ember-decorators/component';
import { classNames } from '@ember-decorators/component';
import layout from '../../templates/components/labs-ui/icon-tooltip';

@tagName('span')
@classNames('icon-tooltip')
export default class InfoTooltip extends Component {
  layout = layout

  @argument
  tip = ''

  @argument
  side = ''

  @argument
  icon = 'info-circle'

  @argument
  transform = ''
}
