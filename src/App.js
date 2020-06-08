import React from 'react';
import Posts from './components/Posts';
import './App.css';

function App() {
  // Last 100 
  var RPS_URL = "https://www.reddit.com/r/RobinHoodPennyStocks/new.json?sort=new&limit=100";
  return (
    <div className="App">
      <Posts url={RPS_URL} />
    </div>
  );
}

export default App;
