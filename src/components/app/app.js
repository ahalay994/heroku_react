import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './app.css'
import { withListStoreService } from '../../hoc'
import { HomePage, CreateBlogerPage, SmetaPage } from "../../pages";

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
            <Route
                path='/edit'
                component={ SmetaPage }
            />
        </Switch>
    )
};

export default withListStoreService()(App);