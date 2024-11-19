import React from 'react';
import List from './components/List';
import Entrypoint from './components/Entrypoint';

const App = () => {
  return (
    <div>
      <h1>Card Manager</h1>
      <List />
      <Entrypoint />
    </div>
  );
};

export default App;
