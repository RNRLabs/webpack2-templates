// index.js, (c) <rnrneverdies@gmail.com>

// web-package dependenecies
//import './index.html';
import './index.scss';

// client side app startup
console.log('started');

// ES6 destructuring sample
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { ...o1, ...o2 };

console.log(o3);

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>let's rock again!</h1>,
  document.getElementById('root')
);
