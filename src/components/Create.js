import React, { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { createUser } from '../services/users.services';

export default class Create extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',
      username: '',
      email: '',
      phone: '',
      street: '',
      city: '',
    };
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const { name, username, email, phone, street, city } = this.state;
    e.preventDefault();

    createUser({
      name,
      username,
      email,
      phone,
      address: { street, city },
    }).then(() => {
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <Card>
        <Card.Header>Crear Nuevo Usuario</Card.Header>
        <Card.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type='text'
                placeholder='Nombre'
                name='name'
                onChange={this.handleChange}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control
                type='text'
                placeholder='Nombre de usuario'
                name='username'
                onChange={this.handleChange}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type='email'
                placeholder='Correo'
                name='email'
                onChange={this.handleChange}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type='number'
                placeholder='Teléfono'
                name='phone'
                onChange={this.handleChange}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type='text'
                placeholder='Dirección'
                name='street'
                onChange={this.handleChange}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ciudad'
                name='city'
                onChange={this.handleChange}
                required
              />
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
