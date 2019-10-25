import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './app.css'
import { withListStoreService } from '../../hoc'
import { HomePage, CreateBlogerPage } from "../../pages";

const App = () => {
    return (
        <Switch>
            <Route
                path="/"
                component={ HomePage }
                exact
            />
            <Route
                path='/new'
                component={ CreateBlogerPage }
            />
        </Switch>
    )
};

export default withListStoreService()(App);