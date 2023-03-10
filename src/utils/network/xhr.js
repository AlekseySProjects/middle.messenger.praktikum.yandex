function get(url, options) {
  url = getURLObject(url);

  return new Promise((resolve, reject) => {
    xhr.open('GET', url);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(new Error(`${xhr.status} ${xhr.statusText}`));
      }
    };
    xhr.send();
  });
}

function post(url, options) {
  url = getURLObject(url);

  return new Promise((resolve, reject) => {
    xhr.open('GET', url);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send();
  });
}

function put(url, options) {

}

function del(url, options) {

}

const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.withCredentials = true;

function getURLObject(url) {
  try {
    return new URL(url);
  } catch (err) {
    console.log(url);
    throw new Error('Bad url given');
  }
}

export {get, post, put, del};
