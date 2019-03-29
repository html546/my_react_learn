import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ["10010", "10086", "10000"]
        }
    }
    render() {
        return (
            <div>
                <h2>这是主页</h2>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index}>
                                <Link to={`/detail/${item}`}>{item}</Link>
                            </li>
                        })
                    }
                    <li>
                        <Link to="/detail">无参数链接</Link>
                    </li>
                    <li>
                        <Link to="/detail/abc">非数字链接测试</Link>
                    </li>
                    <li>
                        <Link to="/detail/101">三位数字链接测试</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Home;