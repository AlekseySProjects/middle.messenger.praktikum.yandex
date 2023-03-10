import Handlebars from 'handlebars';
import templateString from 'bundle-text:./register.hbs';
import './register.scss';

const template = Handlebars.compile(templateString);

const page = function(...args) {
  return template(...args);
};

export default page;
