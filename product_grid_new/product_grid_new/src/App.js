import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Detail from './components/Detail';
import Default from './components/Default';


class App extends Component {
  render() {
    return (
            <Fragment>
              <BrowserRouter>
                <Navbar/>
                <Switch>
                  <Route exact path='/' component={ProductList}/>
                  <Route path='/cart' component={Cart}/>
                  <Route path='/detail' component={Detail}/>
                  <Route component={Default}/>
                </Switch>
              </BrowserRouter>
            </Fragment>           
            )}
          }      


export default App;
