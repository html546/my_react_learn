import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import TodoListReducer from './reducers/TodoListReducer';
import * as serviceWorker from './serviceWorker';

/* const reducer = (state = { list: [] }, action = {}) => {
    switch (action.type) {
        case 'ADD_TODO':
            // 状态深拷贝
            const newState = Object.assign({}, state);
            newState.list.push(action.payload);
            return newState;
        default:
            return state;
    }
}
 */

const reducer = combineReducers({
    list: TodoListReducer
})


const store = createStore(reducer, { list: [] })

// const state = store.getState();

function renderPage() {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
}
renderPage()
store.subscribe(renderPage)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
