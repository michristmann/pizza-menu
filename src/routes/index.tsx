import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MainPage from '../pages/Main'
import OrderPage from '../pages/Order'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={MainPage} />
    <Route path="/order/:type/:prop?" component={OrderPage} />
  </Switch>
)

export default Routes
