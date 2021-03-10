import React from 'react';
import './App.css';
import { fhirclient } from 'fhirclient/lib/types';
import Client from 'fhirclient/lib/Client';

interface IAppProps {
  client: Client;
}

function App(props: IAppProps) {
    
  const { client } = props;
    
  return (
    <div className="App">
        Blank Standalone Template
    </div>
  );
}

export default App;
