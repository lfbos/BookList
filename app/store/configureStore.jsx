import * as redux from 'redux';
import thunk from 'redux-thunk';

export var configure = (initialState = {}) => {
 var reducer = redux.combineReducers({});
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose;
 var store = redux.createStore(reducer, initialState, composeEnhancers(  redux.applyMiddleware(thunk)
));

 return store;
};
