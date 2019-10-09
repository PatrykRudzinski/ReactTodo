import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import About from './components/pages/About';
import Tasks from './components/pages/Tasks';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <main className="container">
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/tasks' component={Tasks} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
