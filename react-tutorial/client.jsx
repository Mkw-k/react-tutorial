const React = require('react');
const ReactDom = require('react-dom');

/**
 * 불러오기 [wordRelay,jsx]이런게 너무 많아지면 감당이 안되기 때문에 분리한다]
 */
const WordRelay = require('./wordRelay');

ReactDom.render(<GuGuDan />), document.querySelector('#root');