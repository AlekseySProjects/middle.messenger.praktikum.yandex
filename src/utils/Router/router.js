import Route from './route';

/* Ведется запись в два объекта для быстрого поиска по ключу */
/* TODO History API */
/* TODO RouteGenerator to work with regexp */
const keySlug = new Map();
const keyName = new Map();

class Router {
  addRoute(route) {
    if (!route instanceof Route) {
      throw new Error(`Route instance expected.
      Please use Route class to add route`);
    }
    if (this._isRouteExistsByName(route.name)) {
      throw new Error(`Route with name ${route.name} already exists`);
    }
    if (this._isRouteExistsBySlug(route.slug)) {
      throw new Error(`Route with slug ${route.slug} already exists`);
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
    return (key === 'name') ? keyName.get(string) : keySlug.get(string);
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
    return (key === 'name') ?
      this._isRouteExistsByName(string) :
      this._isRouteExistsBySlug(string);
  }
}

export default Router;
