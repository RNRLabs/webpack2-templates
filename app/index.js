// index.js, (c) <rnrneverdies@gmail.com>
// webpack2 dependenecies
import './index.scss';

// app
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// simple reducer
const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counterReducer);

// counter component
class Counter extends React.Component {
  render() {
    return (
      <div
        style={{"fontSize": "36px"}}
        onClick={()=>{
          store.dispatch({
            type: 'INCREMENT'
          });
        }}>
        {this.props.value}
      </div>
    );
  }
}

// main render
const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
    />,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();
