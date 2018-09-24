import React from 'react';
import { observer } from 'mobx-react';

@observer
class TodoList extends React.Component {
    createNew(e) {
        if (e.which === 13) {
            this.props.store.createTodo(e.target.value);
            console.log(e);
            e.target.value = "";

        }
    }

    filter(e) {
        this.props.store.filter = e.target.value;
    }

    toggleCompleted(todo) {
        todo.completed = !todo.completed
    }

    render() {
        const { clearComplete, todos, filter, filteredTodos } = this.props.store;
        const todolist = filteredTodos.map(todo =>
            <li key={todo.id}>
                <input type='checkbox' onChange={this.toggleCompleted.bind(this, todo)} value={todo.completed} />
                {todo.value}
            </li>
        );
        return (
            <div>
                <input type='text' onKeyPress={this.createNew.bind(this)} />
                <input type='text' value={filter} onChange={this.filter.bind(this)} />
                <h1>TODO</h1>
                <ul>{todolist}</ul>
                <a href='#' onClick={clearComplete}>clear complete</a>
            </div>
        )
    }
}

export default TodoList;
