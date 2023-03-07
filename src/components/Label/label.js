import Handlebars from 'handlebars';
import templateString from 'bundle-text:./label.hbs';

const template = Handlebars.compile(templateString);

const Label = function(...args) {
  return template(...args);
};

export default Label;
