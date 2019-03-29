import React, { Component } from 'react';

class Detail extends Component {
    render() {
        return (
            <div>
                <h2>这是详情页</h2>
                <p>{this.props.match.params.tel}</p>
            </div>
        )
    }
}

export default Detail;