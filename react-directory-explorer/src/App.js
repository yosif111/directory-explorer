import React from 'react';
import logo from './logo.svg';
import Container from '@material-ui/core/Container';
import FolderList from './pages/FolderList'
import './App.css';

function App() {
  return (
    <Container maxWidth="lg" className="App">
      <FolderList></FolderList>
    </Container>
  );
}

export default App;
