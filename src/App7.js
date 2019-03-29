import React, { Component } from 'react';
import TodoActions from './actions/TodoActions';
import TodoList from './components/TodoList';
import Store from './store/TodoStore';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.refreshData = this.refreshData.bind(this);
    }
    componentDidMount() {
        Store.addChangeListener(this.refreshData);
    }
    refreshData() {
        let listData = Store.getTodoListData();
        this.setState({
            list: listData
        })
    }
    addTodo(data) {
        // 调用Action
        TodoActions.addTodo(data);
    }
    render() {
        return (
            <div className="App">
                <TodoList onClick={this.addTodo} list={this.state.list} />
            </div>
        )
    }
}

export default App;