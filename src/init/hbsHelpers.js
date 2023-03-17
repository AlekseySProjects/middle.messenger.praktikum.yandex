import Handlebars from 'handlebars';
import Input from '~/src/components/Input';
import Button from '~/src/components/Button';
import Label from '~/src/components/Label';
import Avatar from '~/src/components/Avatar';
import userDataForm from '~/src/pages/components/UserDataForm';

function init() {
  Handlebars.registerPartial('Label', Label);
  Handlebars.registerPartial('Input', Input);
  Handlebars.registerPartial('Button', Button);
  Handlebars.registerPartial('Avatar', Avatar);
  Handlebars.registerPartial('userDataForm', userDataForm);
}

export {init};
