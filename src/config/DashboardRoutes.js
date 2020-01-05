import React from 'react'
import { Switch, Route, browserHistory } from 'react-router-dom'
import Analysis from '../screens/dashboard/analysis'
import Products from '../screens/dashboard/products'
import Orders from '../screens/dashboard/orders'
import Members from '../screens/dashboard/members'

export default () => (
    <Switch history={browserHistory} >
        <Route exact path="/Analysis" component={Analysis} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/Orders" component={Orders} />
        <Route exact path="/Members" component={Members} />
    </Switch >
)