import React from 'react';
import { observer } from 'mobx-react';

@observer
class TodoList extends React.Component {
    render() {
        return <h1>{this.props.store.todos[0]}</h1>
    }
}

export default TodoList;
