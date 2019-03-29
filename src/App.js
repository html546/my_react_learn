import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import News from './News';
import Other from './Other';
import Detail from './Detail';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <div className="navbar">
                            <NavLink exact activeClassName="active" to="/">主页</NavLink>
                            <NavLink activeClassName="active" to="/news">新闻</NavLink>
                            <NavLink activeClassName="active" to="/others">其他</NavLink>
                        </div>
                        <hr />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/news" component={News} />
                            <Route path="/others" component={Other} />
                            <Route path="/detail/:tel?(\d{3})" component={Detail} />
                            <Redirect from="/*" to="/" />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;