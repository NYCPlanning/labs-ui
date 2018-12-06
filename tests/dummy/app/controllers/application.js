import Controller from '@ember/controller';
import ControllerSupport from 'ember-anchor/mixins/controller-support';

export default Controller.extend(ControllerSupport, {
  anchorQueryParam: 'anchor',
  queryParams: ['anchor'],
  anchor: 'top'
});
