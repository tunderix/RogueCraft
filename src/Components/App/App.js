import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import { Header, Content } from '../'
function App(){

  return (
    <div className="App">
      <Container>
        <Header />
        <Content />
      </Container>
    </div>
  );
}

export default App;
