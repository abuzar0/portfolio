
import React from 'react';
import Home from './Components/Home'
import About from './Components/About';
import Contact from './Components/Contact';
import Project from './Components/project';
import { AnimatePresence } from 'framer-motion';
import {Route,Switch, useLocation} from 'react-router-dom';
import './App.css';
// import Home4  from './Components/timelinedemo';
import LeaveMessage from './Components/LeaveMessage';
function App() {
  const location=useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About} ></Route>
        <Route path="/project" component={Project} ></Route>
        <Route path="/contact" component={Contact} ></Route>
        <Route path="/LeaveMessage" component={LeaveMessage}></Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
