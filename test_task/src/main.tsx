import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {store} from './state/store';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
)
