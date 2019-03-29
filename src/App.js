import React, { Component } from 'react';
import TodoActions from './action/TodoActions';
import TodoList from './components/TodoList';

class App extends Component {
    addTodo(data) {
        // 调用Action
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