import Handlebars from 'handlebars';
import templateString from 'bundle-text:./avatar.hbs';
import './avatar.scss';

const template = Handlebars.compile(templateString);

const Avatar = function(...args) {
  return template(...args);
};

export default Avatar;
