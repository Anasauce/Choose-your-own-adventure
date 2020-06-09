import React, { useState } from 'react';
import './App.css';
import Story from './components/Story';

export const FrameContext = React.createContext(0);

const App = () => {
  let [frameNumber, setFrameNumber] = useState(0);

  return (
    <div className="App">
      <FrameContext.Provider value={[frameNumber, setFrameNumber]}>
        <Story />
      </FrameContext.Provider>
    </div>
  );
}

export default App;
