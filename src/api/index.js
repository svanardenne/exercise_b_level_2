// fetches random UUID from rails API
export const fetchId = () => {
  return fetch("http://localhost:3000/id", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

// fetches specific user from rails API
export const fetchUserInfo = () => {
  return fetch(
    "http://localhost:3000/user/3d8b3ed5-fb80-43d2-a719-4b9c6941980f",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
};

// creates a new user through rails API and returns user data json
export const createUser = () => {
  return fetch("http://localhost:3000/user", {
    method: "POST",
  }).then((res) => res.json());
};
