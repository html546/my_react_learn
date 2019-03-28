import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // 设定初始state
    this.state = {
      list: [
        '第一个todo',
        '第二个todo',
        '第三个todo',
        '第四个todo'
      ],
    };
    // 推荐这种修正指针的方式
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo() {
    console.log(this.refs.todoVal.value);
    /* this.state.list.push(this.refs.todoVal.value);
    // 更新页面
    this.setState({
      list: this.state.list
    })
    this.refs.todoVal.value = ''; */
    this.setState({
      list: this.state.list.concat(this.refs.todoVal.value)
    })
    this.refs.todoVal.value = '';
  }
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <input type="text" ref="todoVal" />
        <button onClick={this.addTodo}>ADD TODO</button>
        <button onClick={() => { this.props.sendDataFromChild('这是来自于子组件的问候') }}>数据从子到父的传递</button>
        <br />
        <ul>
          {
            // 读取state
            this.state.list.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
TodoList.propTypes = {
  title: PropTypes.string
}

class App extends Component {
  constructor(props) {
    super(props);
    this.sendDataFromChild = this.sendDataFromChild.bind(this);
    this.state = {
      message: 'hello world'
    }
  }
  sendDataFromChild(val) {
    this.setState({
      message: val
    })
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <TodoList title="TodoList测试标题" sendDataFromChild={this.sendDataFromChild} />
      </div>
    );
  }
}

export default App;
