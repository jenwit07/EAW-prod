import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Mobx Libs */
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

/* Store */
import menuStore from './stores/menuStore';
import commonStore from './stores/commonStore'
import productStore from './stores/productStore'

const stores = {
    menuStore,
    commonStore,
    productStore
}

ReactDOM.render((
    <Provider {...stores}>
        <App />
    </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
