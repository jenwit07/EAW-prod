import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../screens/login/login'
import Dashboard from '../screens/dashboard/index'
import PrivateRoutes from '../helper/privateRoutes'

export default () => (
    <Switch >
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <PrivateRoutes exact path="/dashboard/" component={Dashboard} />
        <PrivateRoutes path="/dashboard/:screen" component={Dashboard} />
    </Switch >
)