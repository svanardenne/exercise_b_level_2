import "./App.css";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  // Set state
  const [UUID, setUUID] = useState("uuid");

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
        setUUID(res.id);
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
        setUserInfo({
          ...userInfo,
          id: res.id,
          username: res.username,
          email: res.email,
          bio: res.bio,
        });
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
          created_username: res.username,
          created_email: res.email,
          created_bio: res.bio,
        });
      });
  };

  useEffect(() => {
    fetchId();
    fetchUserInfo();
    createUser();
  }, []);

  const header = () => {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Option B Client</Navbar.Brand>
        </Container>
      </Navbar>
    );
  };

  const displayUUID = () => {
    return (
      <Card>
        <Card.Header>Fetch UUID</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{UUID}</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  };

  const displayUser = () => {
    return (
      <Card>
        <Card.Header>Fetch User</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{id}</ListGroup.Item>
          <ListGroup.Item>{username}</ListGroup.Item>
          <ListGroup.Item>{email}</ListGroup.Item>
          <ListGroup.Item>{bio}</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  };

  const newUser = () => {
    return (
      <Card>
        <Card.Header>New User</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{created_id}</ListGroup.Item>
          <ListGroup.Item>{created_username}</ListGroup.Item>
          <ListGroup.Item>{created_email}</ListGroup.Item>
          <ListGroup.Item>{created_bio}</ListGroup.Item>
        </ListGroup>
      </Card>
    );
  };

  return (
    <div className="App">
      <header>{header()}</header>
      <main>
        <Container className="mt-5">
          <Row>
            <Col xs={12} className="mb-5">
              {displayUUID()}
            </Col>
            <Col className="mb-5">{displayUser()}</Col>
            <Col className="mb-5">{newUser()}</Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
