import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import LineChart from './LineChart';

export default class Dashboard extends Component {
  render() {
    return (
      <Card>
        <Card.Header>Dashboard</Card.Header>
        <Card.Body>
          <LineChart />
        </Card.Body>
      </Card>
    );
  }
}
