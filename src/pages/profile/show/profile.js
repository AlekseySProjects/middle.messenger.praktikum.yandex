import Handlebars from 'handlebars';
import templateString from 'bundle-text:./profile.hbs';

const template = Handlebars.compile(templateString);

const page = function(...args) {
  return template(...args);
};

export default page;
