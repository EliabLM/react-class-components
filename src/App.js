import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import NavBar from './components/NavBar';
import List from './components/List';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  return (
    <Router>
      <NavBar />
      <Container fluid='sm'>
        <h1>Class Components Project</h1>
        <Switch>
          <Route exact path='/' component={List} />
          <Route path='/create' component={Create} />
          <Route path='/update/:id' component={Update} />
          <Redirect from='/*' to='/' />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
