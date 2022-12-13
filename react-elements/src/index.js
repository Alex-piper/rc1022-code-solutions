import React from 'react';
import ReactDOM from 'react-dom';

const firstReactElement = React.createElement('h1', {}, 'Hello React!');
console.log('firstReactElement', firstReactElement);

// const container = document.querySelector('#root');

ReactDOM.render(firstReactElement, document.getElementById('root'));
