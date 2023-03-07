import Handlebars from 'handlebars';
import Input from '~/src/components/Input';
import Button from '~/src/components/Button';
import Label from '~/src/components/Label';

function init() {
  Handlebars.registerPartial('Label', Label);
  Handlebars.registerPartial('Input', Input);
  Handlebars.registerPartial('Button', Button);
}

export {init};
