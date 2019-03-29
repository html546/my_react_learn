import React, { Component } from 'react';

class Child extends Component {
    componentWillUnmount() {
        console.log('这是子组件:componentWillUnmount')
    }
    render() {
        return (
            <div>这是个子组件</div>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        // 初始化state
        this.state = {
            flag: false
        }
        this.toggle = this.toggle.bind(this);
    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    toggle() {
        this.setState({
            flag: !this.state.flag
        })
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return false;
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    render() {
        console.log('render');
        return (
            <div className="App">
                <button onClick={this.toggle}>切换</button>
                {this.state.flag ? <Child /> : ''}
            </div>
        )
    }
}

export default App;