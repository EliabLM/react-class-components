import React, { Component } from 'react';
import { Button, Card, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getUser, updateUser } from '../services/users.services';

export default class Update extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      user: {},
      id: '',
      name: '',
      username: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    getUser(this.props.match.params.id)
      .then((res) => {
        this.setState({ loading: false, user: res }, () => {
          const { name, username, email, phone, address } = this.state.user;

          this.setState({
            id: this.props.match.params.id,
            name,
            username,
            email,
            phone,
            street: address.street,
            city: address.city,
          });
        });
      })
      .catch((error) => console.log(error));
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const { id, name, username, email, phone, street, city } = this.state;
    e.preventDefault();

    updateUser({
      id,
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
        <Card.Header>Actualizar Usuario</Card.Header>
        <Card.Body>
          {this.state.loading ? (
            <Spinner animation='border' role='status'>
              <span className='visually-hidden'>Cargando...</span>
            </Spinner>
          ) : (
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className='mb-3'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Nombre'
                  name='name'
                  onChange={this.handleChange}
                  defaultValue={this.state.user.name}
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
                  defaultValue={this.state.user.username}
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
                  defaultValue={this.state.user.email}
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
                  defaultValue={this.state.user.phone}
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
                  defaultValue={this.state.user.address.street}
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
                  defaultValue={this.state.user.address.city}
                  required
                />
              </Form.Group>

              <Link to='/' type='button' className='btn btn-secondary'>
                Atras
              </Link>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          )}
        </Card.Body>
      </Card>
    );
  }
}
