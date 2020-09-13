import React from 'react';
import {render} from 'react-dom';
import Counter from './Counter';
import {createStore, applyMiddleware} from 'redux';
import './index.css';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducer';


const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
}


const store = createStore(reducer, applyMiddleware(logger));
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});
store.dispatch({type:'RESET'});

const App = () => (


  <Provider store={store} >
    <Counter />
  </Provider >
)

render(<App />, document.getElementById('root'));

