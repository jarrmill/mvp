import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class CreateOrganization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('Submitting: ', this.state);
    const { name } = this.state;
    this.props.handleSubmit(name);
    this.setState({ name: ''});
  }
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="email">
            <Form.Label>Join an Organization</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter an organization's name. If it doesn't exist we'll create it for you."
              onChange={this.handleNameChange}
              value={this.state.name}
            />
          </Form.Group>
          <Button type="submit" onClick={this.handleSubmit} >
            Submit
          </Button>
        </Form>
      </div>
    ); 
  }
}