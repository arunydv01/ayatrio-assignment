import React, { useRef } from 'react';
import Scene from './components/Scene';
import ColorButton from './components/ColorButton';
import "./App.css";

function App() {
  const floorRef = useRef();

  return (
    <div className="App">
      <Scene floorRef={floorRef} />
      <ColorButton floorRef={floorRef} />
    </div>
  );
}

export default App;
