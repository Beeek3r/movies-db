import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './app.scss'
import Home from './pages/Home';

const key = "10ed85ef914c6fcc68550f543b4fceb6"



const App: React.FC = () => {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>

    
  );
}

export default App;
