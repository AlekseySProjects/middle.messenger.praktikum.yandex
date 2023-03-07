import Handlebars from 'handlebars';
import './auth.scss';
import templateString from 'bundle-text:./auth.hbs';

const template = Handlebars.compile(templateString);

const page = function(...args) {
  return template(...args);
};

export default page;
