import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import shoppingBasketApp from './reducers';

let store = createStore(shoppingBasketApp);

ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>, document.getElementById('root'));

//registerServiceWorker(); <-- NEED HTTPS
