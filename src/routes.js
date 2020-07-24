import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Catalog from './pages/Catalog';
import Product from './pages/Product';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/product" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}
