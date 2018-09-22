import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './component/TodoList';
import store from './store/TodoStore';

ReactDOM.render(<TodoList store={store}/>, document.getElementById('root'));
