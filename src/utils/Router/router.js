import Route from './route';

/* Ведется запись в два объекта для быстрого поиска по ключу */
/* TODO History API */
const keySlug = new Map();
const keyName = new Map();

class Router {
  addRoute(route) {
    if (!route instanceof Route) {
      throw new Error(`Route instance expected.
      Please use Route class to add route`);
    }
    keyName.set(route.name, route);
    keySlug.set(route.slug, route);
  }

  removeRoute(string, key = 'name') {
    const route = this.getRoute(string, key);
    if (!route) {
      return;
    }
    keySlug.delete(route.slug);
    keyName.delete(route.name);
  }

  getRoute(string, key = 'slug') {
    if (key === 'name') {
      return keyName.get(string);
    }
    return keySlug.get(string);
  }

  getRouteBySlug(string) {
    return keySlug.get(string);
  }

  _isRouteExistsByName(string) {
    return keyName.has(string);
  }

  _isRouteExistsBySlug(string) {
    return keySlug.has(string);
  }

  // TODO: вынести в другой класс
  getUrl = (string, options = {}) => {
    // const {hash} = options;
    // if (hash) {
    //   console.log(hash.target);
    // }
    return this.getRoute(string, 'name')?.slug;
  };

  hasRoute(string, key = 'slug') {
    if (key === 'name') {
      return this._isRouteExistsByName(string);
    }
    return this._isRouteExistsBySlug(string);
  }
}

export default Router;
