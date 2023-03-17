import Handlebars from 'handlebars';
import {Router, Route} from './utils/Router';
import {init as handlebarsInit} from './init/hbsHelpers.js';
import {routes} from './init/staticRoutes.js';
import {default as notFoundPage} from '~/src/pages/404';
import './layout/main/main.scss';

handlebarsInit();

const AppRouter = new Router();

routes.forEach((element) => {
  const {name, slug, callback} = element;
  AppRouter.addRoute(new Route(name, slug, callback));
});

Handlebars.registerHelper('route', AppRouter.getUrl);

const root = document.querySelector('#root');

const url = new URL(window.location);
const pathname = url.pathname;

const matchedRoute = AppRouter.getRouteBySlug(pathname);

const user1 = {
  first_name: 'Вася',
  second_name: 'Пупкин',
  login: 'vasya',
  email: 'v.pupkin@ya.net',
  password: '*******',
  phone: '4956667788',
  avatar: 'https://yastatic.net/s3/home-static/_/46/462e92b9e3792be37a1c3fdefb26af28.png',
};

if (matchedRoute) {
  const template = matchedRoute.handler;
  // TODO add layout to flow
  root.insertAdjacentHTML('beforeend', template(user1));
} else {
  // 404
  root.insertAdjacentHTML('beforeend', notFoundPage());
}
