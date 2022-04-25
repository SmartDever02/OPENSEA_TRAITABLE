export const socials = ['music', 'instagram', 'twitter'];
export default function getSocial(id: any) {
  var item = require('../resources/images/social/social' + id + '.svg');
  return item;
}
