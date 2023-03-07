import Handlebars from 'handlebars';
import './input.scss';
import templateString from 'bundle-text:./input.hbs';

const template = Handlebars.compile(templateString);

const defaultOptions = {
  type: 'text',
};

const Input = function(...args) {
  const data = args[0];
  const options = Object.assign({}, defaultOptions, data);
  args[0] = options;

  return template(...args);
};

export default Input;
