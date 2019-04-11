import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css';

import App from './App';

function reducer() {
    return {
        titie: 'hello',
    }
}

const store = createStore(reducer);

ReactDOM.render(
<Router>
    <Provider store={store}>
        <App />
    </Provider>
</Router>
, document.getElementById('root'));