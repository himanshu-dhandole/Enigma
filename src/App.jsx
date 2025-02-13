import React from 'react';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import TrackingList from './Components/TrackingList';
import TargetCamLoc from './Components/TargetCamLoc';
import Request from './Components/Request';
import ActiveSessions from './Components/ActiveSessions';
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <TrackingList />
      <TargetCamLoc />
      <Request />
      <ActiveSessions />
    </div>
  );
}

export default App;
