const React = require('react');
const {Component} = React;


/**
 * 이런게 너무 많아지면 감당이 안되기 때문에 분리한다
 */
class WordRelay extends React.Component{
    state = {
        text: 'Hello, webpack',
    };

    render(){
        return <h1>{this.state.text}</h1>;
    }
}

//이게 다른데서 쓸수 있게 만들어 주는 부분이다, 익스포트
module.exports = WordRelay;