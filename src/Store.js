// import {createStore,combineReducers,applyMiddleware,compose} from 'redux'

// import {reducer as filterReducer} from './filter'
// import {reducer as todoReducer} from './todos'

// import Perf from 'react-addons-perf'

// const win = window
// win.Perf = Perf


// //把多个Reducer合称为一个reducer函数
// const reducer = combineReducers({
//     todos:todoReducer,
//     filter: filterReducer
// })

// const middlewares = []

// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(require('redux-immutable-state-invariant')());
// }

// const storeEnhancers = compose(
//   applyMiddleware(...middlewares),
//   (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
// );


// export default createStore(reducer,{},storeEnhancers)


import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';

import Perf from 'react-addons-perf'

const win = window;
win.Perf = Perf

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});

const middlewares = [];
// if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(require('redux-immutable-state-invariant')());
// }

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {}, storeEnhancers);
