import React from 'react';
import './App.css';
import Counter from '../Counter/Counter';
import SmartCounter from '../SmartCounter/SmartCounter';
import IfoodCounter from '../IfoodCounter/IfoodCounter';

function App() {
  return (
    <React.Fragment>
      <h1>Ifood</h1>
      <IfoodCounter/>
    </React.Fragment>
  );
};

export default App;
