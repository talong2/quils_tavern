import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './components/logo';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Container>
      <Row>
        <Col></Col>
        <Col xs={6}><Logo/><Login/></Col>
        <Col></Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;