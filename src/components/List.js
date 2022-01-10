import React, { Component } from 'react';
import { ButtonGroup, Card, Spinner, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../services/users.services';
import Swal from 'sweetalert2';

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

  handleClickDelete(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id).then(() => {
          getUsers()
            .then((data) => {
              this.setState({ loading: false, users: data });
            })
            .catch((error) => console.log(error));
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        });
      }
    });
  }

  render() {
    const { loading, users } = this.state;

    return (
      <Card>
        <Card.Header>Usuarios</Card.Header>
        <Card.Body>
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
                        <button
                          onClick={() => this.handleClickDelete(user.id)}
                          className='btn btn-danger'
                        >
                          Eliminar
                        </button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>
    );
  }
}
