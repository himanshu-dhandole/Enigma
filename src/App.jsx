import React from 'react';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import TrackingList from './Components/TrackingList';
import TargetCamLoc from './Components/TargetCamLoc';
import Request from './Components/Request';
import ActiveSessions from './Components/ActiveSessions';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
