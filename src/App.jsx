import React from 'react';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import TrackingList from './Components/TrackingList';
import TargetCamLoc from './Components/TargetCamLoc';
import Request from './Components/Request';
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <TrackingList />
      <TargetCamLoc />
      <Request />
    </div>
  );
}

export default App;
