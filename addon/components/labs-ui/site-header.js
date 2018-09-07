import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { attribute, tagName } from '@ember-decorators/component';
import { classNames } from '@ember-decorators/component';
import layout from '../../templates/components/labs-ui/site-header';

@tagName('header')
@classNames('site-header')
export default class LabsUiSiteHeaderComponent extends Component {
  layout = layout

  @attribute
  ariaRole = 'banner';

  @argument
  closed = true;

  @argument
  responsiveNav = false;

  @argument
  responsiveSize = 'large';
}
