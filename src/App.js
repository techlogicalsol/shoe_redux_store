import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';

import NavBar from './Components/NavBar';

import Home from './Components/Home'
import Men from './Components/Men';
import Women from './Components/Women';
import NewArrival from './Components/NewArrival';

import {Provider} from 'react-redux';
import store from './Store';
import DetailM from './Components/DetailM';
import Cart from './Components/Cart';


function App() {
  return (
    <div>
        <Provider store={store}>
        <NavBar />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/men" component={Men} />
          <Route exact path="/detailM/:id" component={DetailM} />
          <Route exact path="/women" component={Women} />
          <Route exact path="/newArrival" component={NewArrival} />
          <Route exact path="/cart" component={Cart} />


        <Redirect to="/" />
        </Switch>

        </Provider>
    </div>
  );
}

export default App;
