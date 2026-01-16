import Component from '@glimmer/component';
import md5 from 'blueimp-md5';
import { service } from '@ember/service';

export default class GravatarComponent extends Component {
  @service constants;
  get gravatar() {
    const size = this.args.size || 512,
      defaultImage = encodeURI(
        `https://go.notificare.com/assets/images/no-gravatar-blue.png`
      ),
      userImage = md5(this.args.userId);
    return `https://www.gravatar.com/avatar/${userImage}?s=${size}&d=${defaultImage}`;
  }
}
