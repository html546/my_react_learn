import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.addTodo = this.addTodo.bind(this);
        this.addOne = this.addOne.bind(this);
    }
    addTodo() {
        this.props.store.dispatch({
            type: "ADD_TODO",
            payload: this.refs.todoVal.value
        })
    }
    addOne(){
        this.props.store.dispatch((dispatch,state)=>{
            setTimeout(function(){
                dispatch({
                    type:'ADD_ONE',
                    payload:1
                })
            },2000)
        })
    }
    render() {
        const list = this.props.store.getState().list;
        const count = this.props.store.getState().count;
        return (
            <div className="App">
                <input type="text" ref="todoVal" />
                <button onClick={this.addTodo}>ADD TODO</button>
                <hr/>
                {count}<button onClick={this.addOne}>+1</button>
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