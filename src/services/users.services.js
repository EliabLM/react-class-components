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
  return new Promise((resolve, reject) => {
    fetch(baseUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

function deleteUser(id) {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export { getUsers, createUser, deleteUser };
