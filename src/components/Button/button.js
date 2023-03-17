import Handlebars from 'handlebars';
import './button.scss';
import templateString from 'bundle-text:./button.hbs';

const template = Handlebars.compile(templateString);

const defaultOptions = {
  type: 'button',
};

const Button = function(...args) {
  const data = args[0];
  const options = Object.assign({}, defaultOptions, data);
  args[0] = options;

  return template(...args);
};

export default Button;
