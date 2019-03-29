import React, { Component } from 'react';

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <input type="text" ref="todoVal" />
                <button onClick={() => this.props.onClick(this.refs.todoVal.value)}>ADD TODO</button>
                {/* 将来要在这里显示列表 */}
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}