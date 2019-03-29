import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import News from './News';
import Other from './Other';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Link to="/">主页</Link>
                        <Link to="/news">新闻</Link>
                        <Link to="/others">其他</Link>
                        <hr />
                        <Route exact path="/" component={Home} />
                        <Route path="/news" component={News} />
                        <Route path="/others" component={Other} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;