import Component from '@glimmer/component';

export default class SiteHeaderComponent extends Component {
  closed = true;

  get responsiveNav() {
    return this.args.responsiveNav || false;
  }

  get responsiveSize() {
    return this.args.responsiveSize || 'large';
  }

  get betaNotice() {
    return this.args.betaNotice || false;
  }
}
