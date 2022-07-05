import React from 'react';
import './App.css';
import './Transition.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group"
import 'bootstrap/dist/css/bootstrap.min.css';
import Entry from './routes/Entry';
import Main from './routes/Main';
import Notfound from './routes/Notfound';

function App() {
  const routes = [
    { path : '/', name : 'Entry', Component: Entry},
    { path : '/main/', name : 'Main', Component: Main},
    { path : '*', name : 'Notfound', Component: Notfound}
  ];
  const location = useLocation();
  
  return (
    <div className="App">
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.pathname} timeout={1000} classNames="fade">
          <Routes location={location}>
            {routes.map( ({path, name, Component}) => (
              <Route key={name} path={path} element={<Component />} />
            ))}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}


export default App;
