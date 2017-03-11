// main.js, (c) <rnrneverdies@gmail.com>

console.log('started');

import React from 'react';
import ReactDOM from 'react-dom';

// ES6 destructuring sample
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { ...o1, ...o2 };

console.log(o3);

ReactDOM.render(
  <h1>let's rock!</h1>,
  document.getElementById('root')
);
