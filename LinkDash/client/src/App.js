import React, { useState, useEffect } from 'react';
import { Navbar, Dropdown } from './components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false);
      }
    }

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  });

  return (
    <div className="App">
    <Router>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>

      </Switch>
    </Router>
    </div>
  );
}

export default App;
