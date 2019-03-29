import React, { Component } from 'react';
import TodoActions from './actions/TodoActions';
import TodoList from './components/TodoList';

class App extends Component {
    addTodo(data) {
        // 调用Action
        TodoActions.addTodo(data);
    }
    render() {
        return (
            <div className="App">
                <TodoList onClick={this.addTodo} />
            </div>
        )
    }
}

export default App;