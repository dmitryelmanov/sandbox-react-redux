import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
/*import { Provider } from 'react-redux';
import {
    createStore,
    applyMiddleware
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { selectSubreddit, fetchPostsIfNeeded } from './actions/subredditActions';
import { render } from '@testing-library/react';*/

render(<Root />, document.getElementById('root'));

// const loggerMiddleware = createLogger();
// const store = createStore(reducers, applyMiddleware(thunkMiddleware, loggerMiddleware));

// store.dispatch(selectSubreddit('reactjs'));
// store.dispatch(fetchPostsIfNeeded('reactjs'))
//     .then(() => console.log(store.getState()));

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();