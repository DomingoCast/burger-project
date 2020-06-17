import React from 'react';
import './App.sass';
import Layout from './hoc/Layout/Layout'

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import {Route, Switch, Redirect} from 'react-router-dom'

function App() {
  return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/burger" exact component={BurgerBuilder}/>
                    <Redirect from="/" to="/burger"/>
                </Switch>
            </Layout>
        </div>
  );
}

export default App;
