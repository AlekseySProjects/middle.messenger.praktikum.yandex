import Handlebars from 'handlebars';
import templateString from 'bundle-text:./userDataForm.hbs';

const template = Handlebars.compile(templateString);

const userDataForm = function(...args) {
  return template(...args);
};

export default userDataForm;
