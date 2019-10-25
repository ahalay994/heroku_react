import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";

import ListStoreService from './services/liststore-service'
import { ListStoreServiceProvider } from './components/list-store-service-context'

import App from "./components/app";
import store from './store'

import Header from "./components/header";
import Footer from "./components/footer";

import 'bootstrap/dist/css/bootstrap.min.css';

const listStoreService = new ListStoreService();

ReactDOM.render(
    <Provider store={store}>
        <ListStoreServiceProvider value={listStoreService}>
            <Router>
                <Header />
                <App />
                <Footer />
            </Router>
        </ListStoreServiceProvider>
    </Provider>,
    document.getElementById('root')
);
