import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router";

export default class Register extends React.Component {
  state = {
    Signup: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  };

  handleReg = (e) => {
    const { name, value } = e.target;
    this.setState((prev) => ({
      ...prev,
      Signup: {
        ...prev.Signup,
        [name]: value,
      },
    }));
  };

  handleRegister = async (e) => {
    e.preventDefault();
    const { Signup } = this.state;
    await axios.post("http://localhost:8080/signup", Signup);
    window.alert("Signup successfully! Now you can Login.");
    this.props.history.push("/login");
  };
  render() {
    const { firstName, lastName, email, password } = this.state;
    return (
      <>
        <div
          style={{ margin: "0 auto", width: "28rem", background: "#e0e0e0" }}
        >
          <Form onSubmit={this.handleRegister}>
            <h5>Register here</h5>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "38rem",
                padding: "30px",
              }}
            >
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={firstName}
                onChange={this.handleReg}
                required
              />

              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={lastName}
                onChange={this.handleReg}
                required
              />

              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={this.handleReg}
                required
              />

              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={this.handleReg}
                required
              />
              <Button
                type="submit"
                style={{ width: "90px", marginTop: "20px" }}
              >
                Sign Up
              </Button>
            </div>
          </Form>
        </div>
      </>
    );
  }
}
