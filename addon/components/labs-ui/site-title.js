import Component from '@ember/component';
import { tagName } from '@ember-decorators/component';
import layout from '../../templates/components/labs-ui/site-title';

@tagName('span')
export default class LabsUiSiteTitleComponent extends Component {
  layout = layout
}
