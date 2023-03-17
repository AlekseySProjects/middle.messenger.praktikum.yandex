/* eslint-disable camelcase */
class User {
  constructor({
    first_name,
    second_name,
    login,
    email,
    password,
    phone,
    avatar} = {}) {
    Object.assign(this,
        {first_name, second_name, login, email, password, phone, avatar});
  }
}

export default User;
