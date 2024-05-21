import React, { useState } from 'react';
import CurrentTime from './components/CurrentTime';
import HeightComponent from './components/Height'; 
import './App.css';

function App() {
  const [showTime, setShowTime] = useState(true);

  const toggleTimeDisplay = () => {
    setShowTime(!showTime);
  };

  return (
    <div className="App">
      <button onClick={toggleTimeDisplay}>
        {showTime ? 'Hide Time' : 'Show Time'}
      </button>
      {showTime && <CurrentTime />}
      <HeightComponent /> 
    </div>
  );
}

export default App;