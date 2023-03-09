import Handlebars from 'handlebars';
import {Router, Route} from './utils/Router';
import {init as handlebarsInit} from './init/hbsHelpers.js';
import {routes} from './init/staticRoutes.js';

handlebarsInit();

const AppRouter = new Router();

routes.forEach((element) => {
  AppRouter.addRoute(new Route(element.name, element.slug, element.callback));
});

Handlebars.registerHelper('route', AppRouter.getUrl);

const root = document.querySelector('#root');

const url = new URL(window.location);
const pathname = url.pathname;

const matchedRoute = AppRouter.getRouteBySlug(pathname);

if (matchedRoute) {
  const template = matchedRoute.handler;
  // TODO add layout to flow
  root.insertAdjacentHTML('beforeend', template());
} else {
  // 404
}
