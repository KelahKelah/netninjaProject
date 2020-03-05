import React, {Component} from 'react';
import Navigation from '../src/components/navigation/navigation'
import './App.css';
import {BrowserRouter, Route } from 'react-router-dom'
import Home from '../src/page/home/home'
import Contact from '../src/page/contact/contact'
import Logout from '../src/page/logout/logout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="">
          <Navigation />
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/logout' component={Logout} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;