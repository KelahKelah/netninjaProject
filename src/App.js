import React, {Component} from 'react';
import Navigation from '../src/components/navigation/navigation'
import './App.css';
import {BrowserRouter, Route } from 'react-router-dom'
import Home from '../src/page/home/Home'
import Contact from '../src/page/contact/Contact'
import Logout from '../src/page/logout/Logout'


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