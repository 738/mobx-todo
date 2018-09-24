import { observable, autorun, computed } from 'mobx';

class Todo {
    @observable value;
    @observable id;
    @observable completed;

    constructor(value) {
        this.value = value;
        this.id = Date.now();
        this.completed = false;
    }
}

class TodoStore {
    @observable todos = [];
    @observable filter = "";

    @computed get filteredTodos() {
        let matchesFilter = new RegExp(this.filter, 'i');
        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo));
    }

    createTodo(value) {
        this.todos.push(new Todo(value));
    }

    clearComplete = () => {
        const incompleteTodos = this.todos.filter(todo => !todo.completed);
        this.todos.replace(incompleteTodos);
    }
}

var store = window.store = new TodoStore;

export default store;

autorun(() => {
    console.log(store.todos);
});