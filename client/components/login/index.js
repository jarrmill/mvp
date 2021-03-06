import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: ""
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    this.props.handleLogin(email, email);
  }
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange} />
          </Form.Group>
          <Button type="submit" onClick={this.handleSubmit} >
            Submit
          </Button>
        </Form>
      </div>
    ); 
  }
}