import React, { Component } from 'react';
import { ButtonGroup, Card, Spinner, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getUsers } from '../services/users.services';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, users: [] };
  }

  componentDidMount() {
    this.setState({ loading: true });

    getUsers()
      .then((data) => {
        this.setState({ loading: false, users: data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { loading, users } = this.state;

    return (
      <Card>
        <Card.Body>
          <Card.Title>Usuarios</Card.Title>

          {loading ? (
            <Spinner animation='border' role='status'>
              <span className='visually-hidden'>Cargando...</span>
            </Spinner>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <ButtonGroup aria-label='Basic example'>
                        <Link
                          to={`/update/${user.id}`}
                          className='btn btn-info'
                        >
                          Editar
                        </Link>
                        <button className='btn btn-danger'>Eliminar</button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}

          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
