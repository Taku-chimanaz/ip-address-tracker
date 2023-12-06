import React, { useState } from 'react';
import './../css/App.css';
import { Header } from './Header';
import { Main } from './Main';
import { IPDetails } from './IPDetails';

function App() {

  const [ipDetails, setIPDetails] = useState(null);

  return (
    <div className="App">
      <Header setIPDetails={setIPDetails} />

      <Main ipDetails={ipDetails} />
      <IPDetails ipDetails={ipDetails} />
    </div>
  );

}

export default App;
