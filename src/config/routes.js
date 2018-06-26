import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import BooksContainer from '../containers/BooksContainer';

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/books' component={ BooksContainer }/>
  </Switch>
)
