import {default as chatPage} from '~/src/pages/chats';
import {default as authPage} from '~/src/pages/auth';
import {default as regPage} from '~/src/pages/register';
import {default as notFoundPage} from '~/src/pages/404';
import {default as serverErrorPage} from '~/src/pages/500';
import {showPage as profilePage,
  editPage as profileEditPage} from '~/src/pages/profile';

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
    callback: profilePage,
  },
  {
    name: 'profile-edit',
    slug: '/profile/edit',
    callback: profileEditPage,
  },
  {
    name: '404',
    slug: '/404',
    callback: notFoundPage,
  },
  {
    name: '500',
    slug: '/500',
    callback: serverErrorPage,
  },
];

export {routes};
