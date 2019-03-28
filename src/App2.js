import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                {
                    author: '王宝强',
                    time: new Date().getTime(),
                    comment: '这是一个很好的电影演员。就是原谅.'
                }
            ],
        };
        this.addComment = this.addComment.bind(this);
        this.formatTime = this.formatTime.bind(this);
    }
    addComment() {
        let commentObj = {
            author: this.refs.author.value,
            time: new Date().getTime(),
            comment: this.refs.comment.value
        }
        this.state.comments.push(commentObj);
        this.setState({
            comments: this.state.comments
        })
        this.refs.author.value = '';
        this.refs.comment.value = '';
    }
    formatTime(timestamp) {
        // console.log(new Date().getTime() - timestamp);
        /* let mintues = (new Date() - timestamp) / 1000 / 60;
        minutes = Math.floor(minutes) + '分钟前';
        if (minutes < 1) {
            
        } */
        let minutes = Math.floor((new Date() - timestamp) / 1000 / 60);
        console.log(minutes);
        if (minutes < 1) {
            minutes = '刚刚';
        } else {
            minutes = minutes + '分钟前';
        }
        return minutes;
    }
    render() {
        return (
            <div className="App">
                <h2>留言板</h2>
                <div className="comments">
                    {
                        this.state.comments.map((item, index) => {
                            return <div key={index}>
                                <span>{item.author}</span><br />
                                <span>{this.formatTime(item.time)}</span>
                                <p>{item.comment}</p>
                            </div>
                        })
                    }
                </div>
                <input type="text" ref="author" /><br />
                <textarea ref="comment"></textarea><br />
                <button onClick={this.addComment}>发表留言</button>
            </div>
        )
    }
}

export default App;