import {default as chatPage} from '~/src/pages/chats';
import {default as authPage} from '~/src/pages/auth';
import {default as regPage} from '~/src/pages/register';

const routes = [
  {
    name: 'home',
    slug: '/',
    callback: chatPage,
  },
  {
    name: 'auth',
    slug: '/auth',
    callback: authPage,
  },
  {
    name: 'reg',
    slug: '/signup',
    callback: regPage,
  },
  {
    name: 'profile',
    slug: '/profile',
    callback: null,
  },
];

export {routes};
