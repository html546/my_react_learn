import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        this.addTodo = this.addTodo.bind(this);
        // this.deleteTodo = this.deleteTodo.bind(this);
    }
    addTodo() {
        this.state.list.push(this.refs.todoVal.value);
        this.setState({
            list: this.state.list
        })
        this.refs.todoVal.value = '';
    }
     deleteTodo(index) {
         this.state.list.splice(index, 1);
         this.setState({
             list: this.state.list
         })
     }
    render() {
        let items = this.state.list.map((item, index) => {
            return <li key={index}>
                {item}
                <button onClick={() => this.deleteTodo(index)}>X</button>
            </li>
        });
        return (
            <div>
                <input type="text" ref="todoVal" />
                <button onClick={this.addTodo}>ADD TODO</button>
                <ul>
                    <ReactCSSTransitionGroup
                        transitionName="reactAnim"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                    >
                        {items}
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        )
    }
}

export default App;