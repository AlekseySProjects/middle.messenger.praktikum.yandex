const API_PREFIX = 'https://ya-praktikum.tech/api/v2';
const TEST_API = 'https://jsonplaceholder.typicode.com/todos/1';

// Authentication
const _AUTH_PREFIX = API_PREFIX + '/auth';
const SIGNUP = _AUTH_PREFIX + '/signup';
const SIGNIN = _AUTH_PREFIX + '/signin';
const LOGOUT = _AUTH_PREFIX + '/logout';
const AUTH_INFO = _AUTH_PREFIX + '/user';

export {
  SIGNUP,
  SIGNIN,
  LOGOUT,
  AUTH_INFO,
  TEST_API,
};

export default API_PREFIX;
