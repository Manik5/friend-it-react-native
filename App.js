import React from 'react';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import flatsReducer from './redux/reducers/flat.reducer';

import FlatNavigator from './navigation/FlatNavigator';


const rootReducer = combineReducers({
  flats: flatsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
	     <Provider store={store}>
	       <FlatNavigator />
	     </Provider>
  );
}

