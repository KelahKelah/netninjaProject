import React from 'react';
import Navigation from '../src/components/navigation/navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../src/page/home/home';
import Contact from '../src/page/contact/contact';
import Logout from '../src/page/logout/logout';
import Login from '../src/components/login/login';
import hooks from './components/hooks/hooks';


const Router = () => {
    return(
        <div>
             <BrowserRouter>
                <div className="">
                    <Navigation />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/home' component={Home} />
                            <Route exact path='/contact' component={Contact} />
                            <Route exact path='/logout' component={Logout} />
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/hooks' component={hooks} />
                        </Switch>
                    </div>
            </BrowserRouter>
        </div>
    )
}
export default Router;