import { Button, Form } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default class AdminLogin extends React.Component {
  state = {
    loginDetails: {
      username: "govindabist11@gmail.com",
      password: "govindabist1234",
    },
    errMsg: "",
  };

  userLogin = async (e) => {
    e.preventDefault();
    const { loginDetails } = this.state;
    try {
      await axios.post("http://localhost:8080/login", loginDetails);
    } catch (e) {
      this.setState({
        errMsg: e.error || e.message || "Internal Server Error",
      });
    }
  };
  render() {
    return (
      <>
        <div style={{ margin: "0 auto", width: "30%" }}>
          <h5>Member Login</h5>
          <Form onSubmit={this.userLogin}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "28rem",
                border: "0.5px solid gray",
                padding: "30px",
                background: "#e0e0e0",
              }}
            >
              <small
                style={{ textDecoration: "underline", fontWeight: "bold" }}
              >
                After register you can login here...
              </small>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="username"
                required
              />

              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                required
              />

              <Button
                type="submit"
                style={{ width: "90px", marginTop: "20px" }}
              >
                Login
              </Button>

              <div style={{ textAlign: "center", paddingTop: "20px" }}>
                <Link to="sign-up">Register</Link>
              </div>
            </div>
          </Form>
        </div>
      </>
    );
  }
}
