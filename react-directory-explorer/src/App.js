import React from 'react';
import Container from '@material-ui/core/Container';
import FolderList from './pages/FolderList'
import { Browser } from "react-window-ui";

import './App.css';

function App() {
  return (
    <Container maxWidth="lg" className="App">
        <Browser className="BrowserWindow" >
          <FolderList></FolderList>
        </Browser>
    </Container>
  );
}

export default App;
