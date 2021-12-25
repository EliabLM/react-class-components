import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

export default class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type='text' placeholder='Nombre' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control type='text' placeholder='Nombre de usuario' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Correo</Form.Label>
          <Form.Control type='email' placeholder='Correo' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type='number' placeholder='Teléfono' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Dirección</Form.Label>
          <Form.Control type='text' placeholder='Dirección' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type='text' placeholder='Ciudad' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    );
  }
}
