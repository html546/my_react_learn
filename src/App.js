import React, { Component } from 'react';

class App extends Component {
    componentDidMount() {
        fetch({
            method:'post',
            url:"/api/index/index",
            data:{
                userid:'1',
                sessionid:'n7b0km6figrarrfveo83c8ias1'
            }
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            })
    }
    render() {
        return <div>

        </div>
    }
}
export default App;