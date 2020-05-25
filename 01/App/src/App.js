import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"
import Home from './Container/Home';
import Details from './Container/Details';

export default function App() {
    return (
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/item/:id' component={(props) => <Details {...props} />} />
        </Switch>
    )
}
