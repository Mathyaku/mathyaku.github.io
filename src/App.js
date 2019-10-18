import React from 'react';
import {HashRouter} from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <HashRouter>
      <Header/>
      <Routes/>
    </HashRouter>
  );
}

export default App;
