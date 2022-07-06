import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // Set state
  const [userInfo, setUserInfo] = useState({
    id: 1,
    username: "username",
    email: "email",
    bio: "bio",
  });

  const [createdUserInfo, setCreatedUserInfo] = useState({
    created_id: 1,
    created_username: "username",
    created_email: "email",
    created_bio: "bio",
  });

  // Deconstruct user state
  const { id, username, email, bio } = userInfo;

  // Deconstruct created user state
  const { created_id, created_username, created_email, created_bio } =
    createdUserInfo;

  // Fetches uuid
  const fetchId = () => {
    fetch("http://localhost:3000/id", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUserInfo({ ...userInfo, id: res.id });
      });
  };

  // Fetches user info and places it in state
  const fetchUserInfo = () => {
    fetch("http://localhost:3000/user/3d8b3ed5-fb80-43d2-a719-4b9c6941980f", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUserInfo({ ...userInfo, id: res.id });
      });
  };

  const createUser = () => {
    fetch("http://localhost:3000/user", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        setCreatedUserInfo({
          ...createdUserInfo,
          created_id: res.id,
        });
      });
  };

  useEffect(() => {
    fetchUserInfo();
    createUser();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Option B Client</h1>
      </header>
      <main>
        <h1>{id}</h1>
        <h1>{created_id}</h1>
      </main>
    </div>
  );
}

export default App;
