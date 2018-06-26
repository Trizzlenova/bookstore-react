import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import BooksContainer from '../containers/BooksContainer';
import Book from '../components/Book'
import ViewBookContainer from '../containers/ViewBookContainer'

export default (
  <Switch>
    <Route exact path='/' component={ Home }/>
    <Route path='/books' component={ BooksContainer }/>
    <Route path={`/books/:title`} component={ ViewBookContainer } />
  </Switch>
)
