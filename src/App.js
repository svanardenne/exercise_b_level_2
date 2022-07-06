import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    id: 1,
    username: "username",
    email: "email",
    bio: "bio",
  });

  const { id, username, email, bio } = userInfo;

  return (
    <div className="App">
      <header>
        <h1>Option B Client</h1>
      </header>
      <main>
        <h1>{username}</h1>
      </main>
    </div>
  );
}

export default App;
