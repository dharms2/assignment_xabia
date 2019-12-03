import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import Routes from './shared/routes';
import './assets/css/error-page.css';
import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css'


//  wrap whole app in Provider so every component has access to the store
ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

