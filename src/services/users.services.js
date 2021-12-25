const baseUrl = 'http://localhost:4000/users';

function getUsers() {
  return new Promise((resolve, reject) => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => reject(error));
  });
}

function createUser(data) {
  return new Promise((resolve, reject) => {});
}

export { getUsers, createUser };
