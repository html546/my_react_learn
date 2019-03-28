import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo() {
        this.props.store.dispatch({
            type: "ADD_TODO",
            payload: this.refs.todoVal.value
        })
    }
    render() {
        const list = this.props.store.getState().list;
        return (
            <div className="App">
                <input type="text" ref="todoVal" />
                <button onClick={this.addTodo}>ADD TODO</button>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li key={item + index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default App;